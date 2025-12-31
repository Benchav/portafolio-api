import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('3000'),
  GROQ_API_KEY: z.string().min(1, "GROQ_API_KEY is required"),
  ALLOWED_ORIGIN: z.string().default('*')
});

const envVars = envSchema.parse(process.env);

export const config = {
  port: parseInt(envVars.PORT, 10),
  groqApiKey: envVars.GROQ_API_KEY,
  allowedOrigin: envVars.ALLOWED_ORIGIN
};
