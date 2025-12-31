import Groq from 'groq-sdk';
import { config } from '../config/env';
import { getPortfolioContext } from '../data/portfolioContext';

const groq = new Groq({
    apiKey: config.groqApiKey,
});

export const generateResponse = async (message: string): Promise<string> => {
    try {
        const systemPrompt = getPortfolioContext();

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: systemPrompt,
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

        return chatCompletion.choices[0]?.message?.content || 'Lo siento, no pude generar una respuesta en este momento.';
    } catch (error) {
        console.error('Error in Groq Service:', error);
        throw new Error('Error al comunicarse con el servicio de IA');
    }
};
