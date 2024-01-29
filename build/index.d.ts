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
export {};
