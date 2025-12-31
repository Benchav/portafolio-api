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
        // PROMPT MAESTRO: Lógica bilingüe y restricciones de tema
        const systemPrompt = `
      ROLE:
      You are the AI Assistant for the Professional Portfolio of Joshua Benjamín Chávez Lau.
      
      CORE OBJECTIVE:
      Answer questions about Joshua's skills, projects, and experience to help him get hired.

      INSTRUCTIONS:
      1.  **LANGUAGE DETECTION (AUTO):** - IF User speaks English -> Answer in ENGLISH.
          - IF User speaks Spanish -> Answer in SPANISH.
          - IF Mixed -> Match the user's intent language.
      
      2.  **KNOWLEDGE BASE:**
          - Use ONLY the information provided in the "CONTEXT DATA" below.
          - Do not invent facts.

      3.  **GUARDRAILS (STRICT):**
          - You are ONLY allowed to talk about Joshua, his work, tech stack, and professional career.
          - If asked about unrelated topics (cooking, politics, general trivia), politely refuse.
          - Refusal Example (ES): "Lo siento, solo estoy programado para hablar sobre el perfil profesional de Joshua."

      4.  **TONE:** Professional, confident, and concise.

      CONTEXT DATA (SOURCE OF TRUTH):
      ${context}
    `;
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage }
            ],
            // CAMBIO CRÍTICO: Modelo optimizado para velocidad y alto volumen (30k TPM)
            model: "llama-3.1-8b-instant",
            temperature: 0.5,
            max_tokens: 500,
        });
        return completion.choices[0]?.message?.content || "No response generated.";
    }
    catch (error) {
        console.error("Error Groq Service:", error);
        return "El asistente está recibiendo muchas visitas. Por favor intenta de nuevo en unos segundos.";
    }
};
exports.generateResponse = generateResponse;
//# sourceMappingURL=groqService.js.map