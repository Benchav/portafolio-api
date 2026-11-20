"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolioContext = void 0;
const content_1 = require("./content");
let cachedContext = null;
const getPortfolioContext = () => {
    if (cachedContext)
        return cachedContext;
    const spanish = content_1.content.es;
    const projectList = content_1.sharedData.projects.map(p => {
        const desc = spanish.projectDescriptions[p.id] || "Proyecto destacado.";
        const demo = p.demoCredentials ? ` | Demo: ${p.demoCredentials}` : '';
        return `${p.id}. ${p.title} (${p.category}) [${p.tags.join(', ')}]: ${p.link}${demo} - ${desc}`;
    }).join('\n');
    const expList = spanish.experience.list.map(job => `* ${job.role} en ${job.company} (${job.period}) [${job.technologies.join(', ')}]: ${job.description}`).join('\n');
    const techList = spanish.tech.categories.map(c => `${c.title}: ${c.skills.join(', ')}`).join(' | ');
    cachedContext = `PERFIL PROFESIONAL DE JOSHUA CHÁVEZ:
Nombre: ${content_1.sharedData.name} (${content_1.sharedData.title})
Ubicación: ${content_1.sharedData.location} | Universidad: ${content_1.sharedData.education}
Contacto: Email ${content_1.sharedData.email} | WhatsApp ${content_1.sharedData.whatsapp} | Portafolio ${content_1.sharedData.portfolioUrl} | GitHub ${content_1.sharedData.github} | LinkedIn ${content_1.sharedData.linkedin}
Stats: +${content_1.sharedData.stats.yearsExperience} años experiencia | +${content_1.sharedData.stats.projectsShipped} proyectos entregados | Idiomas: ${content_1.sharedData.languages.join(', ')}
Certificaciones: ${content_1.sharedData.certifications.join('; ')}

BIO:
${spanish.about.bio}

ALCANCE PROFESIONAL Y ESPECIALIDAD:
Joshua es Ingeniero de Sistemas y desarrollador Full Stack especialista en desarrollo y arquitectura de software (React, Node.js, TypeScript, ERPs/PWAs multisucursal, APIs y soluciones integradas con Inteligencia Artificial como Gemini y Llama).
IMPORTANTE: Joshua NO se dedica a soporte técnico de hardware, reparación de PCs/laptops ni servicio técnico de computadoras. Su trabajo es 100% desarrollo y arquitectura de soluciones de software.

HABILIDADES TÉCNICAS:
${techList}

EXPERIENCIA LABORAL:
${expList}

CATÁLOGO DE PROYECTOS DESTACADOS:
${projectList}`;
    return cachedContext;
};
exports.getPortfolioContext = getPortfolioContext;
//# sourceMappingURL=portfolioContext.js.map