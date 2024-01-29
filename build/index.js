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
        if (inputText.trim() === '') {
            return null;
        }
        // Handle preprocessing
        let chatHistory = JSON.parse(JSON.stringify(options?.chatHistory || this.options?.chatHistory || []));
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
        if (this.options) {
            this.options.chatHistory = chatHistory;
        }
        else {
            this.options = {
                chatHistory: chatHistory,
            };
        }
        return {
            audio: outputAudio,
            chatHistory: chatHistory,
        };
    }
}
//////////
export class OpenAIWhisper {
    apiKey;
    model;
    language;
    prompt;
    constructor(options) {
        this.apiKey = options.apiKey;
        this.model = 'whisper-1';
        this.language = options.language;
        this.prompt = options.prompt;
    }
    async process(input, stream) {
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
            const data = (await response.json());
            return data.text ?? '';
        }
        catch (error) {
            console.error('Error:', error);
            return '';
        }
    }
}
export class OpenAIChatCompletion {
    apiKey;
    model;
    maxTokens;
    constructor(options) {
        this.apiKey = options.apiKey;
        this.model = options.model;
        this.maxTokens = options.maxTokens;
    }
    async process(input, contextPrompt, stream) {
        const MODELS = {
            'gpt-4': 'gpt-4-0125-preview',
            'gpt-3.5': 'gpt-3.5-turbo-1106',
        };
        let messages = [];
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
        const cleanOutput = (output) => {
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
            const response = (await res.json());
            return cleanOutput(response.choices[0].message.content);
        }
        catch (error) {
            console.error('Error:', error);
            return '';
        }
    }
}
export class OpenAITextToSpeech {
    apiKey;
    model;
    voice;
    responseFormat;
    constructor(options) {
        this.apiKey = options.apiKey;
        this.model = options.model;
        this.voice = options.voice;
        this.responseFormat = options.responseFormat;
    }
    async process(input, stream) {
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
            return new Blob([(await res.blob())], {
                type: `audio/${this.responseFormat ?? 'mp3'}`,
            });
        }
        catch (error) {
            console.error('Error:', error);
            return new Blob();
        }
    }
}
