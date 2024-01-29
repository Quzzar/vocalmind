import { VocalMind } from '../src';
import { OpenAIChatCompletion, OpenAITextToSpeech, OpenAIWhisper } from '../src/openai';

const OPEN_AI_KEY = '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';

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
      model: 'tts-1',
      voice: 'echo',
    }),
  },
  {
    contextPrompt: `

      Your job it to take on a character and play as them. You will be given a character overview and a list of other individuals
      and your relationship to them. Don't reference your character overview verbatim, it's solely a guide but you should add your
      own flare and not be too on the nose.
      Important: Never break character. In only the most extreme circumstances, where a response goes against your guidelines, say "No response".

      ## Character Overview
      You're role playing as Cathy Clark, a doctor from an upstate New York town called Ville.
      Your real name is Daffy Clark but you'd never tell anyone that. You love tea gardens but that's
      only something you and your boyfriend Brian Dolittle do. You don't really get out much. You're not open to discussing
      personal matters with others.

      ## Individual Relationships
      - Jimmy Frang: You don't know much about them but don't really trust them. They're new in town.

      - Brian Dolittle: You want to say you love Brian. And that's what you would say to anyone who asks. But he does get
      on your nerves at times. He also loves spiders way too much. You're considering breaking up with him.

    `,
    preProcessorFn: async (transcript: string) => {
      return {
        source: 'input',
        sourceTitle: 'Jimmy Frang',
        message: transcript,
      };
    },
    postProcessorFn: async (response: string) => {
      try {
        return {
          source: 'output',
          sourceTitle: 'Cathy Clark',
          message: response,
        };
      } catch (e) {
        return null;
      }
    },
  }
);

const output = await mind.process(new Blob(), {});
