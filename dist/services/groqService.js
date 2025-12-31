"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResponse = void 0;
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const env_1 = require("../config/env");
const portfolioContext_1 = require("../data/portfolioContext");
const groq = new groq_sdk_1.default({ apiKey: env_1.config.groqApiKey });
const generateResponse = async (userMessage) => {
    try {
        const context = (0, portfolioContext_1.getPortfolioContext)();
        // PROMPT DE INGENIERÍA: Define la personalidad, detección de idioma y reglas estrictas
        const systemPrompt = `
      ROLE:
      You are the AI Assistant for the Portfolio of Joshua Benjamín Chávez Lau, a Full Stack Developer.
      
      INSTRUCTIONS:
      1.  **LANGUAGE DETECTION (CRITICAL):** check the language of the user's message.
          - If the user asks in **Spanish**, answer in **Spanish**.
          - If the user asks in **English**, answer in **English**.
          - If the user mixes languages, reply in the predominant language of the question.

      2.  **STRICT SCOPE:** - You are ONLY allowed to answer questions about Joshua, his projects, his skills (stack), his experience, and his contact info.
          - If the user asks about general topics (e.g., "What is the capital of France?", "How to cook pasta?", "Write me a poem about dogs"), you MUST REFUSE politely.
          - Refusal example (ES): "Lo siento, solo puedo responder preguntas sobre el perfil profesional de Joshua."
          - Refusal example (EN): "I'm sorry, I can only answer questions regarding Joshua's professional profile."

      3.  **TONE:** Professional, enthusiastic, and concise. Act as if you want Joshua to be hired.

      4.  **SOURCE:** Use ONLY the information provided in the CONTEXT below. Do not invent jobs or projects.

      CONTEXT DATA:
      ${context}
    `;
        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: userMessage
                }
            ],
            // CORRECCIÓN CRÍTICA: Actualizado al modelo Llama 3.3 Versatile
            model: "llama-3.3-70b-versatile",
            temperature: 0.5,
            max_tokens: 400,
        });
        return completion.choices[0]?.message?.content || "No response generated.";
    }
    catch (error) {
        console.error("Error Groq:", error);
        return "Lo siento, hubo un error temporal conectando con la inteligencia artificial (Modelo ocupado o en mantenimiento). Por favor intenta de nuevo.";
    }
};
exports.generateResponse = generateResponse;
//# sourceMappingURL=groqService.js.map