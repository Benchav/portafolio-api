"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolioContext = void 0;
const content_1 = require("./content");
const getPortfolioContext = () => {
    const spanish = content_1.content.es;
    const english = content_1.content.en;
    // Mapeamos los 20 proyectos uniendo info técnica, descripción y credenciales demo
    const projectContext = content_1.sharedData.projects.map(p => {
        const descriptionEs = spanish.projectDescriptions[p.id] || "Proyecto destacado de desarrollo de software.";
        const descriptionEn = english.projectDescriptions[p.id] || "Featured software development project.";
        const demoInfo = p.demoCredentials ? `\n       CREDENCIALES DEMO: ${p.demoCredentials}` : '';
        return `- PROYECTO #${p.id}: "${p.title}" (${p.category})
       DESCRIPCIÓN (ES): ${descriptionEs}
       DESCRIPTION (EN): ${descriptionEn}
       TECNOLOGÍAS / STACK: ${p.tags.join(', ')}
       ENLACE: ${p.link}${demoInfo}`;
    }).join('\n\n');
    return `
    === PERFIL PROFESIONAL DE JOSHUA CHÁVEZ (DATA SOURCE / SOURCE OF TRUTH) ===
    
    [INFORMACIÓN PERSONAL Y CONTACTO]
    Nombre: ${content_1.sharedData.name}
    Título Profesional: ${content_1.sharedData.title}
    Educación: ${content_1.sharedData.education}
    Ubicación / Residencia: ${content_1.sharedData.location}
    Email: ${content_1.sharedData.email}
    Teléfono: ${content_1.sharedData.phone}
    WhatsApp: ${content_1.sharedData.whatsapp}
    Portafolio Web Oficial: ${content_1.sharedData.portfolioUrl}
    GitHub: ${content_1.sharedData.github}
    LinkedIn: ${content_1.sharedData.linkedin}
    Años de Experiencia: +${content_1.sharedData.stats.yearsExperience} años
    Proyectos Entregados / Desplegados: +${content_1.sharedData.stats.projectsShipped} proyectos
    Idiomas: ${content_1.sharedData.languages.join(', ')}

    [CERTIFICACIONES Y LOGROS]
    ${content_1.sharedData.certifications.map(cert => `* ${cert}`).join('\n')}
    
    [BIO / PERFIL PROFESIONAL (ES)]
    "${spanish.about.bio}"

    [BIO / PROFESSIONAL SUMMARY (EN)]
    "${english.about.bio}"
    
    [STACK TECNOLÓGICO Y HABILIDADES COMPLETAS]
    ${spanish.tech.categories.map(cat => `* ${cat.title}: ${cat.skills.join(', ')}`).join('\n')}
    
    [EXPERIENCIA LABORAL Y TRAYECTORIA DESTACADA (2023 - 2026)]
    ${spanish.experience.list.map(job => `* ROL: ${job.role}
        EMPRESA / PROYECTO: ${job.company} (${job.period})
        DETALLE: ${job.description}
        STACK TECNOLÓGICO: ${job.technologies.join(', ')}`).join('\n\n')}
    
    [CATÁLOGO COMPLETO DE PROYECTOS (20 PROYECTOS)]
    ${projectContext}
  `;
};
exports.getPortfolioContext = getPortfolioContext;
//# sourceMappingURL=portfolioContext.js.map