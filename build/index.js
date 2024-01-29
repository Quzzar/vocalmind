import { cloneDeep } from 'lodash';
export class VocalMind {
    audioToText;
    textProcessor;
    textToAudio;
    options;
    constructor(services, options) {
        this.audioToText = services.audioToText;
        this.textProcessor = services.processor;
        this.textToAudio = services.textToAudio;
        this.options = options;
    }
    async process(audio, options) {
        const stream = options?.stream || this.options?.stream || false;
        // Convert audio to text
        let inputText = await this.audioToText.process(audio, stream);
        inputText = 'Hey! Youre Beth right?';
        if (inputText.trim() === '') {
            return null;
        }
        // Handle preprocessing
        let chatHistory = cloneDeep(options?.chatHistory || this.options?.chatHistory || []);
        const preProcessorFn = options?.preProcessorFn || this.options?.preProcessorFn;
        if (preProcessorFn) {
            const result = await preProcessorFn(inputText);
            if (result) {
                if (typeof result === 'string') {
                    chatHistory.push({
                        source: 'input',
                        message: result.trim(),
                    });
                }
                else {
                    chatHistory.push(result);
                }
            }
            else {
                return null;
            }
        }
        else {
            chatHistory.push({
                source: 'input',
                message: inputText.trim(),
            });
        }
        // Normal processing
        const contextPrompt = options?.contextPrompt || this.options?.contextPrompt;
        let responseText = await this.textProcessor.process(chatHistory, contextPrompt, stream);
        let responseMessage;
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
                }
                else {
                    responseMessage = result;
                    responseText = result.message;
                }
            }
            else {
                return null;
            }
        }
        else {
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
        chatHistory.push(responseMessage);
        if (options) {
            options.chatHistory = chatHistory;
        }
        else {
            options = {
                chatHistory: chatHistory,
            };
        }
        return {
            audio: outputAudio,
            chatHistory: chatHistory,
        };
    }
}
