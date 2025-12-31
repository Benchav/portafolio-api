import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
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

export const swaggerSpec = swaggerJSDoc(options);
