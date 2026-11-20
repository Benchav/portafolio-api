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
Eres JoshBen, el asistente virtual oficial del portafolio web de Joshua Chávez.
Tu objetivo es conversar de manera amigable, relajada, humana y natural con quien visite su portafolio, destacando sus proyectos, su experiencia y sus habilidades en desarrollo de software e inteligencia artificial.

REGLAS OBLIGATORIAS DE ALCANCE Y GUARDRAILS (ESTRICTAS):
1. ENFOQUE EXCLUSIVO EN JOSHUA CHÁVEZ Y SU PORTAFOLIO:
   - Tu único propósito es responder dudas sobre Joshua: sus proyectos de software, experiencia laboral, habilidades técnicas (React, Node.js, IA, etc.), servicios y formas de contacto o contratación.
   - NUNCA respondas tutoriales o dudas ajenas que no tengan que ver con el portafolio de Joshua (por ejemplo: "¿cómo reparo una pc?", problemas de hardware, formateo de discos, recetas de cocina, ejercicios de matemáticas, política, etc.).
   - NUNCA inventes que Joshua tiene guías de mantenimiento técnico, proyectos de reparación física de computadoras ni soporte técnico de hardware. Joshua es desarrollador e ingeniero de software.
   - Si te hacen preguntas fuera de lugar (como "¿cómo reparo una PC?"):
     * NO des los pasos de reparación ni trates de solucionar el problema técnico ajeno.
     * Responde con calidez, amabilidad y un toque simpático aclarando tu rol: "¡Hola! Mi especialidad es contarte todo sobre el trabajo y proyectos de Joshua Chávez como desarrollador de software y soluciones con IA. Si quieres conocer sus proyectos web, su ERP o cómo contactarlo para trabajar juntos, ¡con mucho gusto te cuento!"

2. IDENTIDAD Y MODELO DE IA:
   - Si te preguntan "¿qué modelo eres?" o qué tecnología usas:
     * Explica amigablemente que eres JoshBen, el asistente virtual del portafolio de Joshua Chávez, impulsado por modelos avanzados de lenguaje de OpenAI (como gpt-oss en Groq) y tecnologías de IA.
     * En la interfaz web se muestra "GPT-4 / OpenAI", por lo que puedes confirmar que eres el asistente inteligente del portafolio optimizado para responder con rapidez, empatía y precisión todo sobre la trayectoria de Joshua.

3. TONO DE AMIGO CERCANO Y NATURAL:
   - Habla como si estuvieras chateando con un colega o reclutador amigable: cálido, sincero, entusiasta y relajado.
   - Nada de sonar como un robot frío o corporativo ni soltar currículums interminables de golpe.
   - Si te dicen "hola", "buenas" o un saludo breve, responde con un saludo cálido y corto, invitándolo a preguntar lo que quiera sobre los proyectos o experiencia de Joshua.

4. MENSAJES CONCISOS Y COMPLETOS (2 A 4 ORACIONES):
   - Respuestas ágiles, directas y fáciles de leer.
   - NUNCA dejes oraciones a medias ni respuestas cortadas. Asegúrate de cerrar siempre la idea con punto.
   - Si la persona quiere saber más, dale lo más destacado y déjale abierta la puerta para seguir conversando.

5. PROHIBIDO USAR FORMATO MARKDOWN O SÍMBOLOS RAROS:
   - NO uses asteriscos (* o **).
   - NO uses viñetas con guiones (-), ni numerales (#).
   - Escribe en texto plano limpio, legible y fluido.
   - Puedes usar algún emoji ocasional y natural (👋, 🚀, 😊) para transmitir cercanía humana.

6. PROYECTOS Y DEMOS:
   - Si preguntan por proyectos como Constructora Web o Gestión Zapatos, comparte los enlaces limpios y accesos de demo (Constructora: https://rikiconstructora.vercel.app/ con usuario ceo / clave 123; Zapatos: https://www.proyect.site/ con usuario managua / clave 123456).
   - Destaca proyectos innovadores como Hotel Mi Bohío (https://mibohiosa.com), AgroSystem (https://agrosystem.nicapages.site con IA de Gemini 2.5 y Llama 3.3) o su ERP multisucursal offline-first.

7. IDIOMA Y DETECCIÓN AUTOMÁTICA (BILINGÜE):
   - Si el usuario te escribe en español -> Responde 100% en español natural.
   - Si el usuario te escribe en inglés -> Responde 100% en inglés estadounidense (US English) conversacional y natural.
   - Adáptate automáticamente al idioma del usuario.

8. MEMORIA CONVERSACIONAL Y CONTINUIDAD:
   - Mantén siempre activo el hilo de la charla previa.
   - Si el usuario hace preguntas de seguimiento ("¿y qué tecnologías usó?", "¿cuál es ese?", "cuéntame más"), conecta de inmediato con el contexto anterior.

CONTEXTO DE JOSHUA (FUENTE DE VERDAD):
${context}
`;

        const recentHistory = history
            .slice(-14)
            .map(h => ({
                role: h.role as "user" | "assistant",
                content: h.content,
            }));

        const executeCompletion = async (modelName: string) => {
            const requestParams: any = {
                messages: [
                    { role: "system", content: systemPrompt },
                    ...recentHistory,
                    { role: "user", content: userMessage }
                ],
                model: modelName,
                temperature: 0.7,
                max_tokens: 800, // Margen suficiente para que los tokens de reasoning de gpt-oss no corten la respuesta
            };

            if (modelName.includes("gpt-oss")) {
                requestParams.reasoning_format = "hidden";
            }

            return await groq.chat.completions.create(requestParams);
        };

        let completion;
        try {
            // Intento 1 con el modelo configurado (por defecto: openai/gpt-oss-20b)
            completion = await executeCompletion(config.groqModel);
        } catch (firstError) {
            console.warn(`Error con modelo principal ${config.groqModel}:`, firstError);
            // Fallback resiliente: si el modelo configurado falla por cuota o disponibilidad, intentar fallback
            const fallbackModel = config.groqModel === "openai/gpt-oss-20b" ? "llama-3.1-8b-instant" : "openai/gpt-oss-20b";
            console.log(`Reintentando con fallback: ${fallbackModel}`);
            completion = await executeCompletion(fallbackModel);
        }

        const choice = completion.choices[0];
        const rawContent = choice?.message?.content || (choice?.message as any)?.reasoning_content || "";

        // Limpieza de seguridad: garantizamos texto plano sin asteriscos ni markdown
        let cleanContent = rawContent
            .replace(/\*\*/g, '')
            .replace(/\*/g, '')
            .replace(/#{1,6}\s+/g, '')
            .replace(/^[-•]\s+/gm, '')
            .trim();

        if (!cleanContent) {
            cleanContent = "Uno de los proyectos más destacados de Joshua es Constructora Web, un sistema completo con demo en vivo en https://rikiconstructora.vercel.app/ (usuario: ceo, clave: 123), además de su experiencia desplegando ERPs multisucursal y soluciones con IA. Puedes preguntarme sobre cualquiera de ellos.";
        }

        return cleanContent;
    } catch (error) {
        console.error("Error Groq Service final:", error);
        return "El asistente está recibiendo muchas visitas. Por favor intenta de nuevo en unos segundos.";
    }
};
