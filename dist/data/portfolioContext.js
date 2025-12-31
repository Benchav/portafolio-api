"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolioContext = void 0;
const content_1 = require("./content");
const getPortfolioContext = () => {
    // Extraemos la data base (en español) que la IA usará como fuente de verdad.
    // Llama 3 es capaz de traducir esto al vuelo si se le pide en el System Prompt.
    const spanish = content_1.content.es;
    return `
    === DATOS DEL PERFIL (JOSHUA CHÁVEZ) ===
    Nombre: ${content_1.sharedData.name}
    Email: ${content_1.sharedData.email}
    GitHub: ${content_1.sharedData.github}
    LinkedIn: ${content_1.sharedData.linkedin}
    Experiencia Total: ${content_1.sharedData.stats.yearsExperience} años.
    Proyectos Entregados: ${content_1.sharedData.stats.projectsShipped}.
    
    === RESUMEN BIO ===
    ${spanish.about.bio}
    
    === EXPERIENCIA LABORAL ===
    ${spanish.experience.list.map(job => `- ROL: ${job.role} en ${job.company} (${job.period}).
       DESC: ${job.description}
       TECH: ${job.technologies.join(', ')}`).join('\n')}
    
    === PROYECTOS REALIZADOS (PORTAFOLIO) ===
    ${content_1.sharedData.projects.map(p => `- PROYECTO: ${p.title} (${p.category})
       TAGS: ${p.tags.join(', ')}
       LINK: ${p.link}`).join('\n')}
    
    === STACK TECNOLÓGICO ===
    ${spanish.tech.categories.map(cat => `- ${cat.title}: ${Array.isArray(cat.skills) ? cat.skills.map((s) => typeof s === 'string' ? s : s.name).join(', ') : ''}`).join('\n')}
  `;
};
exports.getPortfolioContext = getPortfolioContext;
//# sourceMappingURL=portfolioContext.js.map