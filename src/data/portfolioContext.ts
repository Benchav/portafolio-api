import { sharedData, content } from './content';

export const getPortfolioContext = () => {
    // Extraemos la data base (en español) que la IA usará como fuente de verdad.
    // Llama 3 es capaz de traducir esto al vuelo si se le pide en el System Prompt.
    const spanish = content.es;

    return `
    === DATOS DEL PERFIL (JOSHUA CHÁVEZ) ===
    Nombre: ${sharedData.name}
    Email: ${sharedData.email}
    GitHub: ${sharedData.github}
    LinkedIn: ${sharedData.linkedin}
    Experiencia Total: ${sharedData.stats.yearsExperience} años.
    Proyectos Entregados: ${sharedData.stats.projectsShipped}.
    
    === RESUMEN BIO ===
    ${spanish.about.bio}
    
    === EXPERIENCIA LABORAL ===
    ${spanish.experience.list.map(job =>
        `- ROL: ${job.role} en ${job.company} (${job.period}).
       DESC: ${job.description}
       TECH: ${job.technologies.join(', ')}`
    ).join('\n')}
    
    === PROYECTOS REALIZADOS (PORTAFOLIO) ===
    ${sharedData.projects.map(p =>
        `- PROYECTO: ${p.title} (${p.category})
       TAGS: ${p.tags.join(', ')}
       LINK: ${p.link}`
    ).join('\n')}
    
    === STACK TECNOLÓGICO ===
    ${spanish.tech.categories.map(cat =>
        `- ${cat.title}: ${Array.isArray(cat.skills) ? cat.skills.map((s: any) => typeof s === 'string' ? s : s.name).join(', ') : ''}`
    ).join('\n')}
  `;
};
