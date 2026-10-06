import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { config } from './config/env';
import chatRoutes from './routes/chatRoutes';

const app = express();

// Security Middlewares
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({
    origin: config.allowedOrigin,
    methods: ['GET', 'POST'],
}));
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 30,
    message: { success: false, error: 'Demasiadas peticiones desde esta IP, por favor intenta de nuevo en un minuto.' },
    standardHeaders: true,
    legacyHeaders: false,
});

app.use('/api', limiter);

// Lazy-loaded Swagger Documentation (speeds up serverless boot time)
app.use('/api/docs', async (req, res, next) => {
    try {
        const swaggerUi = await import('swagger-ui-express');
        const { swaggerSpec } = await import('./config/swagger');
        return swaggerUi.default.setup(swaggerSpec)(req, res, next);
    } catch (err) {
        return next(err);
    }
});

// Routes
app.use('/api', chatRoutes);

// Health Check (Instant warm-up ping)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

// Start Server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

export default app;
