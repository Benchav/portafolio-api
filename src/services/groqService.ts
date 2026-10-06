import Groq from "groq-sdk";
import { config } from "../config/env";
import { getPortfolioContext } from "../data/portfolioContext";

const groq = new Groq({ apiKey: config.groqApiKey });

export interface ChatHistoryMessage {
    role: "user" | "assistant";
    content: string;
}

export const generateResponse = async (userMessage: string, history: ChatHistoryMessage[] = []) => {
    try {
        const context = getPortfolioContext();

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

5. IDIOMA:
   - Si te escriben en español, responde en español natural y amigable.
   - Si te escriben en inglés, responde en inglés natural y conversacional.

CONTEXTO DE JOSHUA (FUENTE DE VERDAD):
${context}
`;

        // Filtramos los últimos 6 mensajes del historial
        const recentHistory = history
            .slice(-6)
            .map(h => ({
                role: h.role as "user" | "assistant",
                content: h.content,
            }));

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                ...recentHistory,
                { role: "user", content: userMessage }
            ],
            model: config.groqModel,
            temperature: 0.7,
            max_tokens: 220,
        });

        const rawContent = completion.choices[0]?.message?.content || "No response generated.";

        // Limpieza de seguridad: garantizamos que no haya asteriscos ni símbolos raros de markdown
        const cleanContent = rawContent
            .replace(/\*\*/g, '')
            .replace(/\*/g, '')
            .replace(/#{1,6}\s+/g, '')
            .replace(/^[-•]\s+/gm, '')
            .trim();

        return cleanContent;
    } catch (error) {
        console.error("Error Groq Service:", error);
        return "El asistente está recibiendo muchas visitas. Por favor intenta de nuevo en unos segundos.";
    }
};
