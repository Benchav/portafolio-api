import { sharedData, content } from './content';

let cachedContext: string | null = null;

export const getPortfolioContext = (): string => {
    if (cachedContext) return cachedContext;

    const spanish = content.es;

    const projectList = sharedData.projects.map(p => {
        const desc = spanish.projectDescriptions[p.id] || "Proyecto destacado.";
        const demo = p.demoCredentials ? ` | Demo: ${p.demoCredentials}` : '';
        return `${p.id}. ${p.title} (${p.category}) [${p.tags.join(', ')}]: ${p.link}${demo} - ${desc}`;
    }).join('\n');

    const expList = spanish.experience.list.map(job =>
        `* ${job.role} en ${job.company} (${job.period}) [${job.technologies.join(', ')}]: ${job.description}`
    ).join('\n');

    const techList = spanish.tech.categories.map(c =>
        `${c.title}: ${c.skills.join(', ')}`
    ).join(' | ');

    cachedContext = `PERFIL PROFESIONAL DE JOSHUA CHÁVEZ:
Nombre: ${sharedData.name} (${sharedData.title})
Ubicación: ${sharedData.location} | Universidad: ${sharedData.education}
Contacto: Email ${sharedData.email} | WhatsApp ${sharedData.whatsapp} | Portafolio ${sharedData.portfolioUrl} | GitHub ${sharedData.github} | LinkedIn ${sharedData.linkedin}
Stats: +${sharedData.stats.yearsExperience} años experiencia | +${sharedData.stats.projectsShipped} proyectos entregados | Idiomas: ${sharedData.languages.join(', ')}
Certificaciones: ${sharedData.certifications.join('; ')}

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
