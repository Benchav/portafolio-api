import { Router } from 'express';
import { chatController } from '../controllers/chatController';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ChatMessage:
 *       type: object
 *       required:
 *         - role
 *         - content
 *       properties:
 *         role:
 *           type: string
 *           enum: [user, assistant]
 *         content:
 *           type: string
 *     ChatRequest:
 *       type: object
 *       required:
 *         - message
 *       properties:
 *         message:
 *           type: string
 *           description: El mensaje para el asistente IA
 *           example: "¿Cuál es la experiencia de Joshua?"
 *         history:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ChatMessage'
 *           description: Historial de mensajes previos para memoria conversacional
 *     ChatResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indica si la petición fue exitosa
 *         message:
 *           type: string
 *           description: La respuesta generada por la IA
 */

/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Enviar un mensaje al asistente IA
 *     tags: [Chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChatRequest'
 *     responses:
 *       200:
 *         description: Respuesta exitosa del asistente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ChatResponse'
 *       400:
 *         description: Error de validación (mensaje vacío, etc.)
 *       500:
 *         description: Error del servidor
 */
router.post('/chat', chatController);

export default router;
