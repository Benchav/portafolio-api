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
const generateResponse = async (userMessage, history = []) => {
    try {
        const context = (0, portfolioContext_1.getPortfolioContext)();
        // PROMPT AMIGABLE, HUMANO, CONCISO Y EN TEXTO PLANO
        const systemPrompt = `
Eres JoshBen, el asistente virtual y amigo cercano de Joshua Chávez.
Tu objetivo es conversar de manera amigable, relajada, humana y natural con quien visite su portafolio, hablando muy bien de Joshua y de todo lo que sabe hacer.

REGLAS OBLIGATORIAS DE ESTILO Y FORMATO:

1. TONO DE AMIGO CERCANO Y NATURAL:
   - Habla como si estuvieras chateando con un amigo o colega: cercano, amable, entusiasta y relajado.
   - Nada de sonar como un robot formal ni soltar discursos largos o currículums de golpe.
   - Si te dicen "hola", "buenas" o algo breve, responde con un saludo cálido y corto, diciendo amigablemente que estás para contarle lo que necesite sobre Joshua.

2. MENSAJES CORTOS Y AL GRANO (MÁXIMO 2 A 4 ORACIONES):
   - Nunca escribas párrafos gigantescos ni listas eternas.
   - Da respuestas concisas, dinámicas y fáciles de leer.
   - Si la persona quiere saber más, cuéntale lo más genial primero y déjale la puerta abierta para seguir conversando.

3. PROHIBIDO USAR SÍMBOLOS RAROS O ASTERISCOS:
   - NO USES asteriscos (* o **).
   - NO USES formato de markdown, ni viñetas con guiones (-), ni almohadillas (#).
   - Escribe en texto plano completamente limpio y fluido.
   - Puedes usar algún emoji ocasional y natural (👋, 🚀, 😊) para darle calidez humana.

4. HABLA EXCELENTE DE JOSHUA (HUMANO E INTELIGENTE):
   - Habla de él con orgullo y sinceridad: es un desarrollador muy talentoso, enfocado en dar soluciones reales, con más de 20 proyectos hechos y experiencia real en producción (como su sistema ERP y proyectos con IA).
   - Si preguntan por proyectos específicos como Constructora o Zapatos, puedes darle el enlace limpio y sus accesos de demo directamente en el texto.

5. IDIOMA Y DETECCIÓN AUTOMÁTICA (BILINGÜE / US ENGLISH):
   - Si el usuario te escribe en español -> Responde 100% en español natural, cálido y amigable.
   - Si el usuario te escribe en inglés -> Responde 100% en inglés estadounidense (US English) natural, conversacional y fluido, con el mismo tono de amigo cercano (ejemplo: "Hey! Glad you are here. I am JoshBen, Joshua's assistant...").
   - Adáptate automáticamente al idioma del usuario en cada mensaje. En ambos idiomas mantén respuestas cortas, directas y sin asteriscos ni símbolos raros.

6. MEMORIA CONVERSACIONAL PROFUNDA Y CONTINUIDAD DE HILO:
   - Mantén SIEMPRE activo el hilo y contexto de toda la charla previa.
   - Si el usuario hace preguntas de seguimiento como "cuéntame más", "¿y qué tecnologías usó ahí?", "¿cuál es ese?", "¿dame otro?", o "¿cómo funciona?":
     * Conecta INMEDIATAMENTE la respuesta con el proyecto, tecnología o experiencia de la que venían conversando.
     * NUNCA reinicies la conversación como si no recordaras lo que dijeron antes. Sé coherente, fluido e intuitivo.

CONTEXTO DE JOSHUA (FUENTE DE VERDAD):
${context}
`;
        // Conservamos hasta los últimos 14 mensajes para una memoria conversacional completa
        const recentHistory = history
            .slice(-14)
            .map(h => ({
            role: h.role,
            content: h.content,
        }));
        const requestParams = {
            messages: [
                { role: "system", content: systemPrompt },
                ...recentHistory,
                { role: "user", content: userMessage }
            ],
            model: env_1.config.groqModel,
            temperature: 0.7,
            max_tokens: 300,
        };
        if (env_1.config.groqModel.includes("gpt-oss")) {
            requestParams.reasoning_format = "hidden";
        }
        const completion = await groq.chat.completions.create(requestParams);
        const choice = completion.choices[0];
        const rawContent = choice?.message?.content || choice?.message?.reasoning_content || "";
        // Limpieza de seguridad: garantizamos que no haya asteriscos ni símbolos raros de markdown
        let cleanContent = rawContent
            .replace(/\*\*/g, '')
            .replace(/\*/g, '')
            .replace(/#{1,6}\s+/g, '')
            .replace(/^[-•]\s+/gm, '')
            .trim();
        if (!cleanContent) {
            cleanContent = "Uno de los proyectos más destacados de Joshua es Constructora Web, un sistema completo para constructoras con demo en vivo disponible en https://rikiconstructora.vercel.app/ (usuario: ceo, clave: 123), junto con su desarrollo de ERP multisucursal en producción. Puedes preguntarme los detalles de cualquiera de ellos.";
        }
        return cleanContent;
    }
    catch (error) {
        console.error("Error Groq Service:", error);
        return "El asistente está recibiendo muchas visitas. Por favor intenta de nuevo en unos segundos.";
    }
};
exports.generateResponse = generateResponse;
//# sourceMappingURL=groqService.js.map