"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatController_1 = require("../controllers/chatController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *   schemas:
 *     ChatRequest:
 *       type: object
 *       required:
 *         - message
 *       properties:
 *         message:
 *           type: string
 *           description: El mensaje para el asistente IA
 *           example: "¿Cuál es la experiencia de Joshua?"
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
router.post('/chat', chatController_1.chatController);
exports.default = router;
//# sourceMappingURL=chatRoutes.js.map