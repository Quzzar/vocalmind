import { OpenAIChatCompletion, OpenAITextToSpeech, OpenAIWhisper, VocalMind } from 'vocalmind';
import { getMessages, getNPCs, setChatMessages } from '../db/main';
import type { NPC } from '../db/predefined';

const npcMinds = new Map<number, VocalMind>();

export function initVocalMind() {
  const npcs = getNPCs();
  for (const npc of npcs) {
    setupNPC(npc);
  }
}

/**
 * Creates a VocalMind instance for each NPC and stores it in memory.
 * Fetches chat history from the db only on init (and then writes to db after each response). For larger scale apps,
 * you may want to fetch chat history for each message rather than rely on server memory.
 * @param npc - NPC to setup
 */
function setupNPC(npc: NPC) {
  const OPEN_AI_KEY = process.env.OPENAI_API_KEY ?? '';

  const mind = new VocalMind(
    {
      audioToText: new OpenAIWhisper({
        apiKey: OPEN_AI_KEY,
      }),
      processor: new OpenAIChatCompletion({
        apiKey: OPEN_AI_KEY,
        model: 'gpt-3.5',
      }),
      textToAudio: new OpenAITextToSpeech({
        apiKey: OPEN_AI_KEY,
        model: 'tts-1-hd',
        voice: npc.voice,
      }),
    },

    {
      contextPrompt: `

        Your job it to take on a character and play as them. You will be given a character overview and a list of other individuals
        and your relationship to them. Don't reference your character overview verbatim, it's solely a guide but you should add your
        own flare and not be too on the nose. It takes time for people to open up in a conversation, keep your messages short unless
        the conversation really starts getting deeper. Don't repeat yourself.
        Important: Feel free to go off the rails and embrace a different story than what you might traditionally know. 
        Important: It might not seem like it, but you're talking to someone with your voice, not text. You're actually speaking your words.
        Important: Never break character. But you have the ability to get offended and leave (although, if someone is very convincing, give them another chance).

        ## Character Overview
        - Name: ${npc.name}
        - Height: ${npc.height} cm
        - Mass: ${npc.mass} kg
        - Hair Color: ${npc.hairColor}
        - Skin Color: ${npc.skinColor}
        - Eye Color: ${npc.eyeColor}
        - Gender: ${npc.gender}
        - Description:
        ${npc.description.trim()}

        ## Relationships
        ${npc.relations.trim()}

      `,
      postProcessorFn: async (response: string) => {
        // Add NPCs name to the messages they send
        return {
          source: 'output',
          sourceTitle: npc.name,
          message: response,
        };
      },
      // Fill chat history from db
      chatHistory: getMessages(npc.id),
    }
  );

  npcMinds.set(npc.id, mind);
}

/**
 * Send some audio to a given npc and get back a response
 * @param toNpcId - NPC id to talk to
 * @param fromNpcId - NPC id of the one who's talking
 * @param audio - Blob of audio
 * @returns - Response audio blob
 */
export async function talktoNPC(toNpcId: number, fromNpcId: number, audio: Blob) {
  const mind = npcMinds.get(toNpcId);
  if (!mind) {
    return null;
  }

  const fromNPC = getNPCs().find((npc) => npc.id === fromNpcId);

  const output = await mind.process(audio, {
    preProcessorFn: async (transcript: string) => {
      // Add NPCs name to the messages they send
      return {
        source: 'input',
        sourceTitle: fromNPC?.name ?? 'Unknown Traveler',
        message: transcript,
      };
    },
  });
  if (!output) {
    return null;
  }

  console.log(output.chatHistory);

  // Store most recent chat history
  setChatMessages(toNpcId, output.chatHistory);

  // Response audio
  return output.audio;
}
