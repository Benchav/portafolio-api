import { sharedData, content } from './content';

export const getPortfolioContext = () => {
    const spanish = content.es;

    // Mapeamos los proyectos uniendo la info técnica con la descripción
    const projectContext = sharedData.projects.map(p => {
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
    Nombre: ${sharedData.name}
    Rol: Ingeniero de Sistemas & Full Stack Developer
    Email: ${sharedData.email}
    Teléfono: ${sharedData.phone}
    WhatsApp: ${sharedData.whatsapp}
    Experiencia: +${sharedData.stats.yearsExperience} años.
    Proyectos Entregados: +${sharedData.stats.projectsShipped}.
    Links: GitHub (${sharedData.github}), LinkedIn (${sharedData.linkedin}).
    
    [BIO / PERFIL PROFESIONAL]
    "${spanish.about.bio}"
    
    [STACK TECNOLÓGICO Y HABILIDADES]
    ${spanish.tech.categories.map(cat =>
        `* ${cat.title}: ${cat.skills.join(', ')}`
    ).join('\n')}
    
    [EXPERIENCIA LABORAL DETALLADA]
    ${spanish.experience.list.map(job =>
        `* ROL: ${job.role} en ${job.company} (${job.period}).
        RESUMEN: ${job.description}
        STACK USADO: ${job.technologies.join(', ')}`
    ).join('\n\n')}
    
    [PORTAFOLIO DE PROYECTOS (DETALLE COMPLETO)]
    ${projectContext}
  `;
};
