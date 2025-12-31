import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  groqApiKey: string;
  allowedOrigin: string;
}

if (!process.env.GROQ_API_KEY) {
  console.warn('WARNING: GROQ_API_KEY is not defined in .env file');
}

export const config: Config = {
  port: Number(process.env.PORT) || 5000,
  groqApiKey: process.env.GROQ_API_KEY || '',
  allowedOrigin: process.env.ALLOWED_ORIGIN || '*',
};
