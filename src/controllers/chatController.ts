import { Request, Response } from 'express';
import { z } from 'zod';
import { generateResponse } from '../services/groqService';

const chatSchema = z.object({
    message: z.string().min(1, 'El mensaje no puede estar vacío').max(1000, 'El mensaje es demasiado largo'),
});

export const chatController = async (req: Request, res: Response) => {
    try {
        // Validar el body con Zod
        const validationResult = chatSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                success: false,
                error: 'Datos inválidos',
                details: validationResult.error.flatten(),
            });
        }

        const { message } = validationResult.data;

        // Llamar al servicio de IA
        const reply = await generateResponse(message);

        return res.status(200).json({
            success: true,
            data: {
                reply,
            },
        });
    } catch (error) {
        console.error('Error in chatController:', error);
        return res.status(500).json({
            success: false,
            error: 'Error interno del servidor',
        });
    }
};
