"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolioContext = void 0;
const content_1 = require("./content");
const getPortfolioContext = () => {
    const spanish = content_1.content.es;
    // Mapeamos los proyectos uniendo la info técnica con la descripción
    const projectContext = content_1.sharedData.projects.map(p => {
        // @ts-ignore
        const description = spanish.projectDescriptions[p.id] || "Proyecto destacado de desarrollo de software.";
        return `- PROYECTO: "${p.title}" (${p.category})
       DESCRIPCIÓN: ${description}
       TECNOLOGÍAS: ${p.tags.join(', ')}
       ENLACE: ${p.link}`;
    }).join('\n\n');
    return `
    === PERFIL DE JOSHUA CHÁVEZ (DATA SOURCE) ===
    
    [INFORMACIÓN PERSONAL]
    Nombre: ${content_1.sharedData.name}
    Rol: Ingeniero de Sistemas & Full Stack Developer
    Email: ${content_1.sharedData.email}
    Experiencia: +${content_1.sharedData.stats.yearsExperience} años.
    Proyectos Entregados: +${content_1.sharedData.stats.projectsShipped}.
    Links: GitHub (${content_1.sharedData.github}), LinkedIn (${content_1.sharedData.linkedin}).
    
    [BIO / PERFIL PROFESIONAL]
    "${spanish.about.bio}"
    
    [STACK TECNOLÓGICO Y HABILIDADES]
    ${spanish.tech.categories.map(cat => `* ${cat.title}: ${cat.skills.join(', ')}`).join('\n')}
    
    [EXPERIENCIA LABORAL DETALLADA]
    ${spanish.experience.list.map(job => `* ROL: ${job.role} en ${job.company} (${job.period}).
        RESUMEN: ${job.description}
        STACK USADO: ${job.technologies.join(', ')}`).join('\n\n')}
    
    [PORTAFOLIO DE PROYECTOS (DETALLE COMPLETO)]
    ${projectContext}
  `;
};
exports.getPortfolioContext = getPortfolioContext;
//# sourceMappingURL=portfolioContext.js.map