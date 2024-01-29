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
exports.VocalMind = void 0;
var lodash_1 = require("lodash");
var VocalMind = /** @class */ (function () {
    function VocalMind(services, options) {
        this.audioToText = services.audioToText;
        this.textProcessor = services.processor;
        this.textToAudio = services.textToAudio;
        this.options = options;
    }
    VocalMind.prototype.process = function (audio, options) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var stream, inputText, chatHistory, preProcessorFn, result, contextPrompt, responseText, responseMessage, postProcessorFn, result, outputAudio, audioShift;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        stream = (options === null || options === void 0 ? void 0 : options.stream) || ((_a = this.options) === null || _a === void 0 ? void 0 : _a.stream) || false;
                        return [4 /*yield*/, this.audioToText.process(audio, stream)];
                    case 1:
                        inputText = _g.sent();
                        inputText = 'Hey! Youre Beth right?';
                        if (inputText.trim() === '') {
                            return [2 /*return*/, null];
                        }
                        chatHistory = (0, lodash_1.cloneDeep)((options === null || options === void 0 ? void 0 : options.chatHistory) || ((_b = this.options) === null || _b === void 0 ? void 0 : _b.chatHistory) || []);
                        preProcessorFn = (options === null || options === void 0 ? void 0 : options.preProcessorFn) || ((_c = this.options) === null || _c === void 0 ? void 0 : _c.preProcessorFn);
                        if (!preProcessorFn) return [3 /*break*/, 3];
                        return [4 /*yield*/, preProcessorFn(inputText)];
                    case 2:
                        result = _g.sent();
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
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        chatHistory.push({
                            source: 'input',
                            message: inputText.trim(),
                        });
                        _g.label = 4;
                    case 4:
                        contextPrompt = (options === null || options === void 0 ? void 0 : options.contextPrompt) || ((_d = this.options) === null || _d === void 0 ? void 0 : _d.contextPrompt);
                        return [4 /*yield*/, this.textProcessor.process(chatHistory, contextPrompt, stream)];
                    case 5:
                        responseText = _g.sent();
                        postProcessorFn = (options === null || options === void 0 ? void 0 : options.postProcessorFn) || ((_e = this.options) === null || _e === void 0 ? void 0 : _e.postProcessorFn);
                        if (!postProcessorFn) return [3 /*break*/, 7];
                        return [4 /*yield*/, postProcessorFn(responseText)];
                    case 6:
                        result = _g.sent();
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
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        responseMessage = {
                            source: 'output',
                            message: responseText.trim(),
                        };
                        _g.label = 8;
                    case 8:
                        if (responseText.trim() === '') {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.textToAudio.process(responseText.trim(), stream)];
                    case 9:
                        outputAudio = _g.sent();
                        audioShift = (options === null || options === void 0 ? void 0 : options.audioShift) || ((_f = this.options) === null || _f === void 0 ? void 0 : _f.audioShift);
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
                        return [2 /*return*/, {
                                audio: outputAudio,
                                chatHistory: chatHistory,
                            }];
                }
            });
        });
    };
    return VocalMind;
}());
exports.VocalMind = VocalMind;
