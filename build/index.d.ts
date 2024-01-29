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
export declare class VocalMind {
    private audioToText;
    private textProcessor;
    private textToAudio;
    private options?;
    constructor(services: {
        audioToText: AudioToText;
        processor: TextProcessor;
        textToAudio: TextToAudio;
    }, options?: ProcessOptions);
    process(audio: Blob, options?: ProcessOptions): Promise<VocalOutput>;
}
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
export {};
