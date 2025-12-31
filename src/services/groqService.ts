import Groq from 'groq-sdk';
import { config } from '../config/env';
import { getPortfolioContext } from '../data/portfolioContext';

export class GroqService {
    private groq: Groq;

    constructor() {
        this.groq = new Groq({
            apiKey: config.groqApiKey,
        });
    }

    public async generateResponse(message: string): Promise<string> {
        try {
            const completion = await this.groq.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: getPortfolioContext(),
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
        } catch (error) {
            console.error('Error in GroqService:', error);
            throw new Error('Error al procesar la solicitud con la IA.');
        }
    }
}

export const groqService = new GroqService();
