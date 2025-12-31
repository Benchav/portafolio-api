import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import swaggerUi from 'swagger-ui-express';
import { config } from './config/env';
import { swaggerSpec } from './config/swagger';
import chatRoutes from './routes/chatRoutes';

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors({
    origin: config.allowedOrigin,
    methods: ['GET', 'POST'],
}));
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 20, // Limita a 20 peticiones por IP por minuto
    message: { success: false, error: 'Demasiadas peticiones desde esta IP, por favor intenta de nuevo en un minuto.' },
    standardHeaders: true,
    legacyHeaders: false,
});

app.use('/api', limiter);

// Swagger Documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', chatRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Start Server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
    console.log(`Documentation available at http://localhost:${config.port}/api/docs`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
