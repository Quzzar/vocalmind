interface AudioToText {
  process(input: Blob, stream?: boolean): Promise<string>;
}
interface TextProcessor {
  process(input: ChatMessage[], contextPrompt?: string, stream?: boolean): Promise<string>;
}
interface TextToAudio {
  process(input: string, stream?: boolean): Promise<Blob>;
}

interface ProcessOptions {
  stream?: boolean;
  audioShift?: {};
  preProcessorFn?(transcript: string): Promise<string | ChatMessage | null>;
  postProcessorFn?(response: string): Promise<string | ChatMessage | null>;
  chatHistory?: ChatMessage[];
  contextPrompt?: string;
  saveChatHistory?: boolean;
}

export interface ChatMessage {
  source: 'input' | 'output';
  sourceTitle?: string;
  timestamp?: string;
  message: string;
}

export type VocalOutput = {
  readonly audio: Blob;
  readonly chatHistory: ChatMessage[];
} | null;

export class VocalMind {
  private audioToText: AudioToText;
  private textProcessor: TextProcessor;
  private textToAudio: TextToAudio;
  private options?: ProcessOptions;

  constructor(
    services: {
      audioToText: AudioToText;
      processor: TextProcessor;
      textToAudio: TextToAudio;
    },
    options?: ProcessOptions
  ) {
    this.audioToText = services.audioToText;
    this.textProcessor = services.processor;
    this.textToAudio = services.textToAudio;
    this.options = options;
  }

  public async process(audio: Blob, options?: ProcessOptions): Promise<VocalOutput> {
    const stream = options?.stream || this.options?.stream || false;

    // Convert audio to text
    let inputText = await this.audioToText.process(audio, stream);

    if (inputText.trim() === '') {
      return null;
    }

    // Handle preprocessing
    let chatHistory = JSON.parse(
      JSON.stringify(options?.chatHistory || this.options?.chatHistory || [])
    );
    const preProcessorFn = options?.preProcessorFn || this.options?.preProcessorFn;
    if (preProcessorFn) {
      const result = await preProcessorFn(inputText);
      if (result) {
        if (typeof result === 'string') {
          chatHistory.push({
            source: 'input',
            message: result.trim(),
          });
        } else {
          chatHistory.push(result);
        }
      } else {
        return null;
      }
    } else {
      chatHistory.push({
        source: 'input',
        message: inputText.trim(),
      });
    }

    // Normal processing
    const contextPrompt = options?.contextPrompt || this.options?.contextPrompt;
    let responseText = await this.textProcessor.process(chatHistory, contextPrompt, stream);
    let responseMessage: ChatMessage;

    // Handle postprocessing
    const postProcessorFn = options?.postProcessorFn || this.options?.postProcessorFn;
    if (postProcessorFn) {
      const result = await postProcessorFn(responseText);
      if (result) {
        if (typeof result === 'string') {
          responseText = result.trim();
          responseMessage = {
            source: 'output',
            message: responseText,
          };
        } else {
          responseMessage = result;
          responseText = result.message;
        }
      } else {
        return null;
      }
    } else {
      responseMessage = {
        source: 'output',
        message: responseText.trim(),
      };
    }

    if (responseText.trim() === '') {
      return null;
    }

    // Convert text to audio
    const outputAudio = await this.textToAudio.process(responseText.trim(), stream);
    const audioShift = options?.audioShift || this.options?.audioShift;
    if (audioShift) {
    }

    // Add response to chat history
    let saveHistory = options?.saveChatHistory || this.options?.saveChatHistory;
    if (saveHistory === undefined) {
      saveHistory = true;
    }
    if (saveHistory) {
      chatHistory.push(responseMessage);
      if (this.options) {
        this.options.chatHistory = chatHistory;
      } else {
        this.options = {
          chatHistory: chatHistory,
        };
      }
    }

    return {
      audio: outputAudio,
      chatHistory: chatHistory,
    };
  }
}

//////////

export class OpenAIWhisper {
  private apiKey: string;
  private model: string;
  private language?: string;
  private prompt?: string;

  constructor(options: { apiKey: string; language?: string; prompt?: string }) {
    this.apiKey = options.apiKey;
    this.model = 'whisper-1';
    this.language = options.language;
    this.prompt = options.prompt;
  }

  public async process(input: Blob, stream?: boolean): Promise<string> {
    const formData = new FormData();
    formData.append('file', input, input.type.replace('/', '.') || 'audio.mp3');
    formData.append('model', this.model);
    if (this.language) {
      formData.append('language', this.language);
    }
    if (this.prompt) {
      formData.append('prompt', this.prompt);
    }

    try {
      const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: formData,
      });

      const data = (await response.json()) as Record<string, any>;
      return data.text ?? '';
    } catch (error) {
      console.error('Error:', error);
      return '';
    }
  }
}

export class OpenAIChatCompletion {
  private apiKey: string;
  private model: string;
  private maxTokens?: number;

  constructor(options: { apiKey: string; model: 'gpt-3.5' | 'gpt-4'; maxTokens?: number }) {
    this.apiKey = options.apiKey;
    this.model = options.model;
    this.maxTokens = options.maxTokens;
  }

  public async process(
    input: ChatMessage[],
    contextPrompt?: string,
    stream?: boolean
  ): Promise<string> {
    const MODELS: Record<string, string> = {
      'gpt-4': 'gpt-4-0125-preview',
      'gpt-3.5': 'gpt-3.5-turbo-1106',
    };

    let messages: { role: string; content: string }[] = [];
    if (contextPrompt) {
      messages = [
        {
          role: 'system',
          content: contextPrompt.trim(),
        },
      ];
    }
    for (const msg of input) {
      let messageHeader = '';
      if (msg.sourceTitle || msg.timestamp) {
        messageHeader = '#';
        if (msg.sourceTitle) {
          messageHeader += ` ${msg.sourceTitle}`;
        }
        if (msg.timestamp) {
          messageHeader += ` (${msg.timestamp})`;
        }
      }

      messages.push({
        role: msg.source === 'output' ? 'assistant' : 'user',
        content: `${messageHeader}\n${msg.message}`.trim(),
      });
    }

    const cleanOutput = (output: string) => {
      return output.replace(/^# (.+)\n/g, '');
    };

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: MODELS[this.model],
          messages: messages,
          max_tokens: this.maxTokens,
        }),
      });
      const response = (await res.json()) as Record<string, any>;
      return cleanOutput(response.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      return '';
    }
  }
}

export class OpenAITextToSpeech {
  private apiKey: string;
  private model: string;
  private voice: string;
  private responseFormat?: string;

  constructor(options: {
    apiKey: string;
    model: 'tts-1' | 'tts-1-hd';
    voice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
    responseFormat?: 'mp3' | 'opus' | 'aac' | 'flac';
  }) {
    this.apiKey = options.apiKey;
    this.model = options.model;
    this.voice = options.voice;
    this.responseFormat = options.responseFormat;
  }

  public async process(input: string, stream?: boolean): Promise<Blob> {
    try {
      const res = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.model,
          input: input,
          voice: this.voice,
          response_format: this.responseFormat,
        }),
      });

      return new Blob([(await res.blob()) as Blob], {
        type: `audio/${this.responseFormat ?? 'mp3'}`,
      });
    } catch (error) {
      console.error('Error:', error);
      return new Blob();
    }
  }
}
