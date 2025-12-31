"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groqService = exports.GroqService = void 0;
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const env_1 = require("../config/env");
const portfolioContext_1 = require("../data/portfolioContext");
class GroqService {
    constructor() {
        this.groq = new groq_sdk_1.default({
            apiKey: env_1.config.groqApiKey,
        });
    }
    async generateResponse(message) {
        try {
            const completion = await this.groq.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: (0, portfolioContext_1.getPortfolioContext)(),
                    },
                    {
                        role: 'user',
                        content: message,
                    },
                ],
                model: 'llama3-70b-8192',
                temperature: 0.7,
                max_tokens: 1024,
            });
            return completion.choices[0]?.message?.content || 'Lo siento, no pude generar una respuesta en este momento.';
        }
        catch (error) {
            console.error('Error in GroqService:', error);
            throw new Error('Error al procesar la solicitud con la IA.');
        }
    }
}
exports.GroqService = GroqService;
exports.groqService = new GroqService();
//# sourceMappingURL=groqService.js.map