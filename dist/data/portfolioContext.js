"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolioContext = void 0;
const content_1 = require("./content");
let cachedContext = null;
const getPortfolioContext = () => {
    if (cachedContext)
        return cachedContext;
    const spanish = content_1.content.es;
    const english = content_1.content.en;
    const projectList = content_1.sharedData.projects.map(p => {
        const desc = spanish.projectDescriptions[p.id] || "Proyecto destacado.";
        const demo = p.demoCredentials ? ` | Demo: ${p.demoCredentials}` : '';
        return `[#${p.id} ${p.title} (${p.category})] Stack: ${p.tags.join(', ')} | Link: ${p.link}${demo} | ${desc}`;
    }).join('\n');
    const expList = spanish.experience.list.map(job => `* ${job.role} en ${job.company} (${job.period}): ${job.description} [Stack: ${job.technologies.join(', ')}]`).join('\n');
    const techList = spanish.tech.categories.map(c => `${c.title}: ${c.skills.join(', ')}`).join(' | ');
    cachedContext = `PERFIL PROFESIONAL (JOSHUA CHÁVEZ):
Nombre: ${content_1.sharedData.name} | Título: ${content_1.sharedData.title}
Educación: ${content_1.sharedData.education} | Ubicación: ${content_1.sharedData.location}
Email: ${content_1.sharedData.email} | Tel: ${content_1.sharedData.phone} | WhatsApp: ${content_1.sharedData.whatsapp}
Portafolio Web: ${content_1.sharedData.portfolioUrl} | GitHub: ${content_1.sharedData.github} | LinkedIn: ${content_1.sharedData.linkedin}
Experiencia: +${content_1.sharedData.stats.yearsExperience} años | Proyectos desplegados: +${content_1.sharedData.stats.projectsShipped} | Idiomas: ${content_1.sharedData.languages.join(', ')}
Certificaciones: ${content_1.sharedData.certifications.join('; ')}

BIO (ES): ${spanish.about.bio}
BIO (EN): ${english.about.bio}

HABILIDADES:
${techList}

EXPERIENCIA DESTACADA:
${expList}

CATÁLOGO DE PROYECTOS (20):
${projectList}`;
    return cachedContext;
};
exports.getPortfolioContext = getPortfolioContext;
//# sourceMappingURL=portfolioContext.js.map