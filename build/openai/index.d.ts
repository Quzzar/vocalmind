import type { ChatMessage } from '..';
export declare class OpenAIWhisper {
    private apiKey;
    private model;
    private language?;
    private prompt?;
    constructor(options: {
        apiKey: string;
        language?: string;
        prompt?: string;
    });
    process(input: Blob, stream?: boolean): Promise<string>;
}
export declare class OpenAIChatCompletion {
    private apiKey;
    private model;
    private maxTokens?;
    constructor(options: {
        apiKey: string;
        model: 'gpt-3.5' | 'gpt-4';
        maxTokens?: number;
    });
    process(input: ChatMessage[], contextPrompt?: string, stream?: boolean): Promise<string>;
}
export declare class OpenAITextToSpeech {
    private apiKey;
    private model;
    private voice;
    private responseFormat?;
    constructor(options: {
        apiKey: string;
        model: 'tts-1' | 'tts-1-hd';
        voice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
        responseFormat?: 'mp3' | 'opus' | 'aac' | 'flac';
    });
    process(input: string, stream?: boolean): Promise<Blob>;
}
