export const sharedData = {
    name: 'Joshua Benjamín Chávez Lau',
    role: 'Desarrollador Full Stack',
    location: 'Nicaragua',
    email: 'joshua@example.com', // Placeholder, replace with real if needed
};

export const content = {
    ...sharedData,
    bio: `Soy Joshua Benjamín Chávez Lau, un desarrollador apasionado con experiencia en crear soluciones web robustas y escalables. Me especializo en el stack MERN y tengo un fuerte background en C# y .NET. He participado activamente en comunidades tecnológicas como JUDC Nicaragua y competencias como Hackathon Nicaragua.`,
    skills: [
        'React',
        'Node.js',
        'TypeScript',
        'C#',
        'Python',
        'SQL',
        'Express',
        'MongoDB',
        'Git',
        'Docker'
    ],
    experience: [
        {
            role: 'Freelance Developer',
            company: 'Autónomo',
            description: 'Desarrollo de aplicaciones web a medida para diversos clientes, enfocándome en calidad y rendimiento.'
        },
        {
            role: 'Miembro Activo',
            company: 'JUDC Nicaragua',
            description: 'Participación en eventos y talleres para fomentar el crecimiento tecnológico en la comunidad.'
        },
        {
            role: 'Participante',
            company: 'Hackathon Nicaragua',
            description: 'Desarrollo de soluciones innovadoras bajo presión en un entorno competitivo.'
        }
    ],
    projects: [
        {
            name: 'Constructora Web',
            description: 'Plataforma administrativa para una empresa constructora, gestionando inventarios y personal.',
            tech: ['React', 'Node.js', 'SQL']
        },
        {
            name: 'Payless System',
            description: 'Sistema de punto de venta y facturación para retail.',
            tech: ['C#', '.NET', 'SQL Server']
        },
        {
            name: 'AgroControl IoT',
            description: 'Sistema de monitoreo para cultivos utilizando sensores IoT.',
            tech: ['Python', 'Raspberry Pi', 'React']
        }
    ]
};
