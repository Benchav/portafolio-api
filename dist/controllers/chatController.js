"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatController = void 0;
const zod_1 = require("zod");
const groqService_1 = require("../services/groqService");
const chatSchema = zod_1.z.object({
    message: zod_1.z.string().min(1, "El mensaje no puede estar vacío"),
});
const chatController = async (req, res) => {
    try {
        // Validar body
        const { message } = chatSchema.parse(req.body);
        // Generar respuesta
        const response = await groqService_1.groqService.generateResponse(message);
        res.status(200).json({
            success: true,
            message: response,
        });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            const zodError = error;
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
exports.chatController = chatController;
//# sourceMappingURL=chatController.js.map