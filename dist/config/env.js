"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const zod_1 = require("zod");
dotenv_1.default.config();
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().default('3000'),
    GROQ_API_KEY: zod_1.z.string().min(1, "GROQ_API_KEY is required"),
    ALLOWED_ORIGIN: zod_1.z.string().default('*')
});
const envVars = envSchema.parse(process.env);
exports.config = {
    port: parseInt(envVars.PORT, 10),
    groqApiKey: envVars.GROQ_API_KEY,
    allowedOrigin: envVars.ALLOWED_ORIGIN
};
//# sourceMappingURL=env.js.map