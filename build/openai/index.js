"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAITextToSpeech = exports.OpenAIChatCompletion = exports.OpenAIWhisper = void 0;
var OpenAIWhisper = /** @class */ (function () {
    function OpenAIWhisper(options) {
        this.apiKey = options.apiKey;
        this.model = 'whisper-1';
        this.language = options.language;
        this.prompt = options.prompt;
    }
    OpenAIWhisper.prototype.process = function (input, stream) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        formData.append('file', input, input.type.replace('/', '.') || 'audio.mp3');
                        formData.append('model', this.model);
                        if (this.language) {
                            formData.append('language', this.language);
                        }
                        if (this.prompt) {
                            formData.append('prompt', this.prompt);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch('https://api.openai.com/v1/audio/transcriptions', {
                                method: 'POST',
                                headers: {
                                    Authorization: "Bearer ".concat(this.apiKey),
                                },
                                body: formData,
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = (_a.sent());
                        return [2 /*return*/, data.text];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Error:', error_1);
                        return [2 /*return*/, ''];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return OpenAIWhisper;
}());
exports.OpenAIWhisper = OpenAIWhisper;
var OpenAIChatCompletion = /** @class */ (function () {
    function OpenAIChatCompletion(options) {
        this.apiKey = options.apiKey;
        this.model = options.model;
        this.maxTokens = options.maxTokens;
    }
    OpenAIChatCompletion.prototype.process = function (input, contextPrompt, stream) {
        return __awaiter(this, void 0, void 0, function () {
            var MODELS, messages, _i, input_1, msg, messageHeader, res, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        MODELS = {
                            'gpt-4': 'gpt-4-0125-preview',
                            'gpt-3.5': 'gpt-3.5-turbo-1106',
                        };
                        messages = [];
                        if (contextPrompt) {
                            messages = [
                                {
                                    role: 'system',
                                    content: contextPrompt.trim(),
                                },
                            ];
                        }
                        for (_i = 0, input_1 = input; _i < input_1.length; _i++) {
                            msg = input_1[_i];
                            messageHeader = '';
                            if (msg.sourceTitle || msg.timestamp) {
                                messageHeader = '#';
                                if (msg.sourceTitle) {
                                    messageHeader += " ".concat(msg.sourceTitle);
                                }
                                if (msg.timestamp) {
                                    messageHeader += " (".concat(msg.timestamp, ")");
                                }
                            }
                            messages.push({
                                role: msg.source === 'output' ? 'assistant' : 'user',
                                content: "".concat(messageHeader, "\n").concat(msg.message).trim(),
                            });
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch('https://api.openai.com/v1/chat/completions', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: "Bearer ".concat(this.apiKey),
                                },
                                body: JSON.stringify({
                                    model: MODELS[this.model],
                                    messages: messages,
                                    max_tokens: this.maxTokens,
                                }),
                            })];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        response = (_a.sent());
                        console.log(response);
                        return [2 /*return*/, response.choices[0].message.content];
                    case 4:
                        error_2 = _a.sent();
                        console.error('Error:', error_2);
                        return [2 /*return*/, ''];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return OpenAIChatCompletion;
}());
exports.OpenAIChatCompletion = OpenAIChatCompletion;
var OpenAITextToSpeech = /** @class */ (function () {
    function OpenAITextToSpeech(options) {
        this.apiKey = options.apiKey;
        this.model = options.model;
        this.voice = options.voice;
        this.responseFormat = options.responseFormat;
    }
    OpenAITextToSpeech.prototype.process = function (input, stream) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, _b, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('https://api.openai.com/v1/audio/speech', {
                                method: 'POST',
                                headers: {
                                    Authorization: "Bearer ".concat(this.apiKey),
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    model: this.model,
                                    input: input,
                                    voice: this.voice,
                                    response_format: this.responseFormat,
                                }),
                            })];
                    case 1:
                        res = _c.sent();
                        _b = Blob.bind;
                        return [4 /*yield*/, res.blob()];
                    case 2: return [2 /*return*/, new (_b.apply(Blob, [void 0, [(_c.sent())], {
                                type: "audio/".concat((_a = this.responseFormat) !== null && _a !== void 0 ? _a : 'mp3'),
                            }]))()];
                    case 3:
                        error_3 = _c.sent();
                        console.error('Error:', error_3);
                        return [2 /*return*/, new Blob()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return OpenAITextToSpeech;
}());
exports.OpenAITextToSpeech = OpenAITextToSpeech;
