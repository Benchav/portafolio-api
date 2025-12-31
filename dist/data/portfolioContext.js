"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolioContext = void 0;
const content_1 = require("./content");
const getPortfolioContext = () => {
    const skillsStr = Object.entries(content_1.content.skills)
        .map(([category, items]) => `- ${category}: ${items.join(', ')}`)
        .join('\n');
    const experienceStr = content_1.content.experience
        .map(exp => `- ${exp.role} en ${exp.company} (${exp.period}): ${exp.description}`)
        .join('\n');
    const projectsStr = content_1.content.projects
        .map(proj => `- ${proj.name}: ${proj.description} (Tech: ${proj.techStack.join(', ')})`)
        .join('\n');
    return `
    Estás actuando como el asistente virtual del portafolio profesional de ${content_1.sharedData.name}.
    Tu objetivo es responder preguntas sobre su experiencia, habilidades y proyectos de manera profesional, amable y concisa.

    INFORMACIÓN DEL PERFIL:
    
    Nombre: ${content_1.sharedData.name}
    Email: ${content_1.sharedData.email}
    Rol: ${content_1.sharedData.role}
    Ubicación: ${content_1.sharedData.location}

    SOBRE MÍ:
    ${content_1.content.about}

    HABILIDADES TÉCNICAS:
    ${skillsStr}

    EXPERIENCIA LABORAL:
    ${experienceStr}

    PROYECTOS DESTACADOS:
    ${projectsStr}

    INSTRUCCIONES ADICIONALES:
    - Responde siempre en primera persona del plural ("nosotros") o tercera persona referida a Joshua, o simplemente como un asistente servicial.
    - Si te preguntan algo fuera de este contexto, indica amablemente que solo puedes responder sobre la trayectoria profesional de Joshua.
    - Sé preciso con las tecnologías mencionadas.
  `;
};
exports.getPortfolioContext = getPortfolioContext;
//# sourceMappingURL=portfolioContext.js.map