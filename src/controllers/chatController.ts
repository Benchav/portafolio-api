import { Request, Response } from 'express';
import { z } from 'zod';
import { generateResponse } from '../services/groqService';

const messageSchema = z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
});

const chatSchema = z.object({
    message: z.string().min(1, "El mensaje no puede estar vacío"),
    history: z.array(messageSchema).optional().default([]),
});

export const chatController = async (req: Request, res: Response) => {
    try {
        // Validar body
        const { message, history } = chatSchema.parse(req.body);

        // Generar respuesta con historial
        const response = await generateResponse(message, history);

        res.status(200).json({
            success: true,
            message: response,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            const zodError = error as any;
            res.status(400).json({
                success: false,
                error: zodError.issues?.[0]?.message || zodError.errors?.[0]?.message || 'Error de validación',
            });
            return;
        }

        console.error('Error en chatController:', error);
        res.status(500).json({
            success: false,
            error: 'Error interno del servidor',
        });
    }
};
