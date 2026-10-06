import { sharedData, content } from './content';

export const getPortfolioContext = () => {
    const spanish = content.es;
    const english = content.en;

    // Mapeamos los 20 proyectos uniendo info técnica, descripción y credenciales demo
    const projectContext = sharedData.projects.map(p => {
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
    Nombre: ${sharedData.name}
    Título Profesional: ${sharedData.title}
    Educación: ${sharedData.education}
    Ubicación / Residencia: ${sharedData.location}
    Email: ${sharedData.email}
    Teléfono: ${sharedData.phone}
    WhatsApp: ${sharedData.whatsapp}
    Portafolio Web Oficial: ${sharedData.portfolioUrl}
    GitHub: ${sharedData.github}
    LinkedIn: ${sharedData.linkedin}
    Años de Experiencia: +${sharedData.stats.yearsExperience} años
    Proyectos Entregados / Desplegados: +${sharedData.stats.projectsShipped} proyectos
    Idiomas: ${sharedData.languages.join(', ')}

    [CERTIFICACIONES Y LOGROS]
    ${sharedData.certifications.map(cert => `* ${cert}`).join('\n')}
    
    [BIO / PERFIL PROFESIONAL (ES)]
    "${spanish.about.bio}"

    [BIO / PROFESSIONAL SUMMARY (EN)]
    "${english.about.bio}"
    
    [STACK TECNOLÓGICO Y HABILIDADES COMPLETAS]
    ${spanish.tech.categories.map(cat =>
        `* ${cat.title}: ${cat.skills.join(', ')}`
    ).join('\n')}
    
    [EXPERIENCIA LABORAL Y TRAYECTORIA DESTACADA (2023 - 2026)]
    ${spanish.experience.list.map(job =>
        `* ROL: ${job.role}
        EMPRESA / PROYECTO: ${job.company} (${job.period})
        DETALLE: ${job.description}
        STACK TECNOLÓGICO: ${job.technologies.join(', ')}`
    ).join('\n\n')}
    
    [CATÁLOGO COMPLETO DE PROYECTOS (20 PROYECTOS)]
    ${projectContext}
  `;
};
