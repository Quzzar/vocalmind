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
            return data.text;
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
        //console.log(messages);
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
            console.log(response);
            return response.choices[0].message.content;
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
