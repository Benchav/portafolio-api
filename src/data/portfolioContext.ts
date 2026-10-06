import { sharedData, content } from './content';

let cachedContext: string | null = null;

export const getPortfolioContext = (): string => {
    if (cachedContext) return cachedContext;

    const spanish = content.es;
    const english = content.en;

    const projectList = sharedData.projects.map(p => {
        const desc = spanish.projectDescriptions[p.id] || "Proyecto destacado.";
        const demo = p.demoCredentials ? ` | Demo: ${p.demoCredentials}` : '';
        return `[#${p.id} ${p.title} (${p.category})] Stack: ${p.tags.join(', ')} | Link: ${p.link}${demo} | ${desc}`;
    }).join('\n');

    const expList = spanish.experience.list.map(job =>
        `* ${job.role} en ${job.company} (${job.period}): ${job.description} [Stack: ${job.technologies.join(', ')}]`
    ).join('\n');

    const techList = spanish.tech.categories.map(c =>
        `${c.title}: ${c.skills.join(', ')}`
    ).join(' | ');

    cachedContext = `PERFIL PROFESIONAL (JOSHUA CHÁVEZ):
Nombre: ${sharedData.name} | Título: ${sharedData.title}
Educación: ${sharedData.education} | Ubicación: ${sharedData.location}
Email: ${sharedData.email} | Tel: ${sharedData.phone} | WhatsApp: ${sharedData.whatsapp}
Portafolio Web: ${sharedData.portfolioUrl} | GitHub: ${sharedData.github} | LinkedIn: ${sharedData.linkedin}
Experiencia: +${sharedData.stats.yearsExperience} años | Proyectos desplegados: +${sharedData.stats.projectsShipped} | Idiomas: ${sharedData.languages.join(', ')}
Certificaciones: ${sharedData.certifications.join('; ')}

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
