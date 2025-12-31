"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Joshua Portfolio API',
            version: '1.0.0',
            description: 'API para el portafolio de Joshua Chávez, potenciada por IA para responder preguntas.',
            contact: {
                name: 'Joshua Chávez',
                email: 'joshua44benja@gmail.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Servidor de Desarrollo',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Path to the API docs
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
//# sourceMappingURL=swagger.js.map