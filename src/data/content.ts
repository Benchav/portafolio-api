export interface Project {
    id: number;
    title: string;
    category: "Frontend" | "Backend" | "Mobile";
    tags: string[];
    link: string;
    demoCredentials?: string;
}

export const sharedData = {
    name: "Joshua Benjamín Chávez Lau",
    title: "Ingeniero de Software | Full Stack & Soluciones de IA",
    education: "Estudiante de último año de Ingeniería de Sistemas - UNAN-Cur Carazo",
    location: "Jinotepe, Carazo, Nicaragua",
    email: "joshua44benja@gmail.com",
    phone: "+505 87156909",
    whatsapp: "https://api.whatsapp.com/send/?phone=50587156909&text&type=phone_number&app_absent=0",
    github: "https://github.com/Benchav",
    linkedin: "https://www.linkedin.com/in/joshua-ch%C3%A1vez-lau-44a65534b/?trk=public-profile-join-page",
    portfolioUrl: "https://joshuachavl.vercel.app/",
    stats: {
        yearsExperience: 3,
        projectsShipped: 20,
    },
    certifications: [
        "Cisco Redes (2025)",
        "Cisco Python (2024)",
        "Gemini AI (2025)",
        "Hackathon Nicaragua (2023, 2024, 2025)",
        "Rally de Innovación Tecnológica (2025 - 2° Lugar)",
        "JUDC (Jornada Universitaria de Desarrollo Científico)",
        "Tecnológico Nacional (2024, 2025)",
        "IA & Agentes Autónomos"
    ],
    languages: [
        "Español (Nativo)",
        "Inglés (A1 - A2 técnico)"
    ],
    projects: [
        {
            id: 1,
            title: "Constructora Web",
            category: "Frontend" as const,
            tags: ["React", "Vite", "Tailwind", "TypeScript", "Node.js"],
            link: "https://rikiconstructora.vercel.app/",
            demoCredentials: "Username: ceo | Password: 123"
        },
        {
            id: 2,
            title: "Gestión Zapatos (Payless System)",
            category: "Frontend" as const,
            tags: ["HTML5", "CSS", "Node.js", "JavaScript"],
            link: "https://www.proyect.site/",
            demoCredentials: "Username: managua | Password: 123456"
        },
        {
            id: 3,
            title: "AgroControl IoT",
            category: "Frontend" as const,
            tags: ["React", "Vite", "Tailwind", "Node.js", "SQLite"],
            link: "https://agrocontrol-tan.vercel.app/"
        },
        {
            id: 4,
            title: "NicaPages Agency",
            category: "Frontend" as const,
            tags: ["React", "Vite", "Tailwind"],
            link: "https://www.nicapages.site/"
        },
        {
            id: 5,
            title: "Veritas Abogados",
            category: "Frontend" as const,
            tags: ["React", "Vite", "Tailwind"],
            link: "https://www.veritasabogado.com/"
        },
        {
            id: 6,
            title: "ETNS School",
            category: "Frontend" as const,
            tags: ["React", "Vite", "Tailwind"],
            link: "https://www.etnschool.com/"
        },
        {
            id: 7,
            title: "Cutler Gym",
            category: "Frontend" as const,
            tags: ["React", "Vite", "Tailwind"],
            link: "https://cutlergym.vercel.app/"
        },
        {
            id: 8,
            title: "Edu-Incluye",
            category: "Frontend" as const,
            tags: ["React", "Vite", "Tailwind"],
            link: "https://edu-incluye.vercel.app/"
        },
        {
            id: 9,
            title: "Avicon System",
            category: "Frontend" as const,
            tags: ["TypeScript", "Node.js", "SQL"],
            link: "https://avicon.nicapages.site/"
        },
        {
            id: 10,
            title: "Email API Service (JB)",
            category: "Backend" as const,
            tags: ["Python", "FastAPI", "HTML/CSS"],
            link: "https://emailapijb.vercel.app/"
        },
        {
            id: 11,
            title: "Fast Tasko API",
            category: "Backend" as const,
            tags: ["Python", "FastAPI", "Firebase"],
            link: "https://fasfttasko.vercel.app/docs#/"
        },
        {
            id: 12,
            title: "API Insumos Barrera",
            category: "Backend" as const,
            tags: ["C#", "ASP.NET", "SQL"],
            link: "https://github.com/Benchav/APIRestInsumos.git"
        },
        {
            id: 13,
            title: "API Zapatos (Payless API)",
            category: "Backend" as const,
            tags: ["Node.js", "JavaScript", "JWT", "Firebase"],
            link: "https://github.com/Benchav/Payless-Api.git"
        },
        {
            id: 14,
            title: "API Constructora",
            category: "Backend" as const,
            tags: ["Node.js", "JWT", "MongoDB"],
            link: "https://github.com/Benchav/Api_Constructora.git"
        },
        {
            id: 15,
            title: "Avicon API",
            category: "Backend" as const,
            tags: ["Node.js", "TypeScript", "JWT", "SQL"],
            link: "https://github.com/Benchav/avicon-api.git"
        },
        {
            id: 16,
            title: "API Insumos DDD",
            category: "Backend" as const,
            tags: ["C#", "ASP.NET", "DDD", "SQL"],
            link: "https://github.com/Benchav/Isumos.git"
        },
        {
            id: 17,
            title: "Tasko Mobile",
            category: "Mobile" as const,
            tags: ["React Native", "FastAPI", "Python"],
            link: "https://github.com/Benchav"
        },
        {
            id: 18,
            title: "JoshFit",
            category: "Mobile" as const,
            tags: ["React", "TypeScript", "Tailwind", "IA / API Keys"],
            link: "https://github.com/Benchav"
        },
        {
            id: 19,
            title: "InsBarrera App",
            category: "Mobile" as const,
            tags: ["Flutter", "Dart", "C# API"],
            link: "https://github.com/Benchav/APP_InsBarrera.git"
        },
        {
            id: 20,
            title: "Aula en Pausa",
            category: "Mobile" as const,
            tags: ["React Native", "JavaScript"],
            link: "https://github.com/Benchav/Aula-Pausa.git"
        }
    ]
};

export const content = {
    es: {
        about: {
            title: "Sobre Mí",
            bio: "Estudiante de último año de Ingeniería de Sistemas en UNAN-Cur Carazo y desarrollador de software enfocado en soluciones pragmáticas, arquitectura y automatización con IA. Cuento con experiencia implementando y desplegando sistemas ERP multisucursal en producción real con resiliencia offline. Especializado en acelerar el desarrollo y optimizar flujos mediante terminal avanzada y herramientas de IA (Claude Code, OpenCode, Antigravity, MCP y agentes autónomos).",
            location: "Jinotepe, Carazo, Nicaragua"
        },
        experience: {
            list: [
                {
                    company: "Insumos Barrera (Freelance | Diriamba, NI)",
                    role: "Desarrollo ERP Multisucursal",
                    period: "2026",
                    description: "Despliegue del sistema sobre servidor local con backend en Node.js y SQLite, asegurando baja latencia, resiliencia offline ante caídas de red y persistencia segura de datos. Implementación de autenticación con JWT, modelado de datos tipados y endpoints REST optimizados para catálogos con alto volumen de registros. Desarrollo de SPA reactiva con React, TypeScript y Tailwind CSS para gestión operativa de inventarios, reportes y facturación.",
                    technologies: ["Node.js", "Express", "SQLite", "Offline-First", "JWT", "React", "TypeScript", "Tailwind CSS"]
                },
                {
                    company: "Repostería Alicia (Freelance | Diriamba, NI)",
                    role: "Facturación & Inventario (POS)",
                    period: "Dic 2025 - 2026",
                    description: "Creación de interfaz web reactiva (Punto de Venta) para agilizar el registro diario de pedidos, ventas y stock. Modelado de datos en frontend tipados estrictamente con TypeScript y sincronizados mediante llamadas REST hacia una API en Express.",
                    technologies: ["React", "TypeScript", "Express", "REST API", "Tailwind CSS"]
                },
                {
                    company: "Freelance",
                    role: "Desarrollador Web",
                    period: "2024 - 2025",
                    description: "Desarrollo modular de sitios web a medida, corporativos e integraciones API con metodologías Mobile-First. Integración de APIs públicas y de terceros, gestión de estados y validación de formularios.",
                    technologies: ["TypeScript", "React", "Vite", "UI/UX", "Tailwind CSS"]
                },
                {
                    company: "Rally Tecnológico de Innovación 2025",
                    role: "Desarrollador Full Stack (2° Lugar)",
                    period: "2025",
                    description: "Proyecto AgroControl: Desarrollo e integración de plataforma de monitoreo y control automatizado para cultivos verticales y horizontales, combinando hardware IoT, telemetría y stack React / Node.js con SQLite.",
                    technologies: ["TypeScript", "React", "Vite", "Node.js", "SQLite", "IoT Telemetría"]
                },
                {
                    company: "Hackathon Nicaragua",
                    role: "Desarrollador Full Stack",
                    period: "2023 - 2025",
                    description: "Desarrollo intensivo de prototipos de software funcionales bajo presión y contrarreloj, integrando herramientas ágiles y soluciones tecnológicas para resolver retos reales de la comunidad.",
                    technologies: ["TypeScript", "React", "Vite", "Node.js", "SQLite"]
                },
                {
                    company: "JUDC Nicaragua",
                    role: "Desarrollador Backend",
                    period: "2023",
                    description: "Creación de un sistema de facturación completo utilizando C# y ASP.NET con base de datos SQL Server.",
                    technologies: ["C#", "ASP.NET", "SQL Server"]
                }
            ]
        },
        projectDescriptions: {
            1: "Constructora Web: Sistema web completo aplicado a constructoras. Panel administrativo con credenciales de demostración activas (Username: ceo | Password: 123).",
            2: "Gestión Zapatos (Payless System): Sistema de inventario para Casa Matriz y sucursales con manejo de dominios (Username: managua | Password: 123456).",
            3: "AgroControl IoT: Sistema de gestión y control IoT en huertos verticales y horizontales con telemetría en tiempo real.",
            4: "NicaPages Agency: Web empresarial corporativa para agencia de desarrollo de software.",
            5: "Veritas Abogados: Página web corporativa profesional para firma legal.",
            6: "ETNS School: Plataforma web para academia de inglés en San Marcos.",
            7: "Cutler Gym: Landing page moderna para gimnasio fitness de alta conversión.",
            8: "Edu-Incluye: Plataforma educativa accesible para el aprendizaje de lenguaje de señas.",
            9: "Avicon System: Gestor avícola completo: control de producción, cuidados sanitarios y alimentación.",
            10: "Email API Service: Microservicio FastAPI en Python para automatización de envío de correos electrónicos.",
            11: "Fast Tasko API: Backend para aplicación de gestión de tareas con autenticación y Firebase.",
            12: "API Insumos Barrera: API RESTful completa construida en ASP.NET con operaciones CRUD para insumos.",
            13: "API Zapatos (Payless API): Backend Node.js para gestión de inventarios con control de roles y permisos.",
            14: "API Constructora: Backend complejo con 13 modelos relacionales, validaciones robustas y seguridad en MongoDB.",
            15: "Avicon API: Backend especializado en Node.js y TypeScript para el sector avícola.",
            16: "API Insumos DDD: API en ASP.NET implementando arquitectura limpia y Domain Driven Design (DDD).",
            17: "Tasko Mobile: Aplicación móvil de productividad y organización de tareas desarrollada en React Native y FastAPI.",
            18: "JoshFit: Aplicación de fitness con rutinas de ejercicio, monitoreo de salud, planes de comidas e integración con APIs de IA.",
            19: "InsBarrera App: Aplicación móvil de comercio electrónico para pastelería con carrito de compras en Flutter y backend C#.",
            20: "Aula en Pausa: Aplicación educativa interactiva para niños en horario escolar construida con React Native."
        } as Record<number, string>,
        tech: {
            categories: [
                {
                    title: "IA & Automatización",
                    skills: ["Claude Code", "OpenCode", "Antigravity", "MCP (Model Context Protocol)", "Agentes Autónomos", "Terminal & CLI Tooling", "APIs de LLMs (Groq, OpenAI, Gemini)"]
                },
                {
                    title: "Frontend",
                    skills: ["React", "Next.js", "React Native", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "HTML5", "CSS3", "UI/UX"]
                },
                {
                    title: "Backend",
                    skills: ["Node.js", "Express", "Fastify", "NestJS", "TypeScript", "REST APIs", "JWT", "Offline-First", "C#", ".NET Core", "ASP.NET", "DDD", "Python", "FastAPI"]
                },
                {
                    title: "Bases de Datos",
                    skills: ["SQLite", "SQL Server", "MySQL", "MongoDB", "Firestore / Firebase", "Azure SQL", "Docker"]
                },
                {
                    title: "DevOps & Herramientas",
                    skills: ["Git", "GitHub", "Docker", "Linux", "Postman", "Vercel", "Jira", "PyCharm", "Trello"]
                }
            ]
        }
    },
    en: {
        about: {
            title: "About Me",
            bio: "Final-year Systems Engineering student at UNAN-Cur Carazo and software developer focused on pragmatic solutions, software architecture, and AI automation. Experienced in implementing and deploying multi-branch ERP systems in real production with offline resilience. Specialized in accelerating development workflows via advanced terminal tooling and AI systems (Claude Code, OpenCode, Antigravity, MCP, and autonomous agents).",
            location: "Jinotepe, Carazo, Nicaragua"
        },
        experience: {
            list: [
                {
                    company: "Insumos Barrera (Freelance | Diriamba, NI)",
                    role: "Multi-branch ERP System",
                    period: "2026",
                    description: "Deployed system on local server with Node.js and SQLite backend, ensuring ultra-low latency, offline resilience during network outages, and secure data persistence. Implemented JWT authentication, strongly typed data models, and REST endpoints optimized for large inventory catalogs. Developed a reactive SPA with React, TypeScript, and Tailwind CSS for inventory, reporting, and billing operations.",
                    technologies: ["Node.js", "Express", "SQLite", "Offline-First", "JWT", "React", "TypeScript", "Tailwind CSS"]
                },
                {
                    company: "Repostería Alicia (Freelance | Diriamba, NI)",
                    role: "Billing & Inventory POS",
                    period: "Dec 2025 - 2026",
                    description: "Created a reactive Point of Sale (POS) web interface to streamline daily orders, sales, and stock registration. Frontend strictly typed with TypeScript and synchronized via REST calls with an Express API.",
                    technologies: ["React", "TypeScript", "Express", "REST API", "Tailwind CSS"]
                },
                {
                    company: "Freelance",
                    role: "Web Developer",
                    period: "2024 - 2025",
                    description: "Modular development of custom corporate websites and API integrations using Mobile-First methodologies, state management, and form validations.",
                    technologies: ["TypeScript", "React", "Vite", "UI/UX", "Tailwind CSS"]
                },
                {
                    company: "Technology Innovation Rally 2025",
                    role: "Full Stack Developer (2nd Place)",
                    period: "2025",
                    description: "AgroControl Project: Automated IoT monitoring and control platform for vertical and horizontal farming combining IoT sensors, telemetry, and React / Node.js with SQLite.",
                    technologies: ["TypeScript", "React", "Vite", "Node.js", "SQLite", "IoT Telemetry"]
                },
                {
                    company: "Hackathon Nicaragua",
                    role: "Full Stack Developer",
                    period: "2023 - 2025",
                    description: "Intensive development of functional software prototypes under tight deadlines for real community challenges.",
                    technologies: ["TypeScript", "React", "Vite", "Node.js", "SQLite"]
                },
                {
                    company: "JUDC Nicaragua",
                    role: "Backend Developer",
                    period: "2023",
                    description: "Built a complete billing system in C# and ASP.NET with SQL Server database.",
                    technologies: ["C#", "ASP.NET", "SQL Server"]
                }
            ]
        },
        projectDescriptions: {
            1: "Construction Web (Constructora Web): Complete web system for construction companies. Admin panel with active demo credentials (Username: ceo | Password: 123).",
            2: "Shoe Management (Payless System): Multi-branch inventory system with domain handling (Username: managua | Password: 123456).",
            3: "AgroControl IoT: IoT monitoring and control platform for vertical and horizontal farming.",
            4: "NicaPages Agency: Corporate business website for a digital agency.",
            5: "Veritas Lawyers: Professional corporate website for a legal firm.",
            6: "ETNS School: Educational platform for English academy in San Marcos.",
            7: "Cutler Gym: Modern landing page for a fitness gym.",
            8: "Edu-Incluye: Accessible educational platform for learning sign language.",
            9: "Avicon System: Complete poultry farm management software (production, healthcare, and feeding).",
            10: "Email API Service: Python FastAPI microservice for automated transactional email delivery.",
            11: "Fast Tasko API: Task management backend API with authentication and Firebase.",
            12: "Insumos Barrera API: Complete RESTful CRUD API built with C# and ASP.NET.",
            13: "Shoes API (Payless API): Node.js backend for inventory management with role-based access.",
            14: "Construction API: Robust backend with 13 data models, validations, and MongoDB security.",
            15: "Avicon API: Specialized poultry management backend in Node.js and TypeScript.",
            16: "Insumos DDD API: ASP.NET API architected with Domain Driven Design (DDD) principles.",
            17: "Tasko Mobile: Task management and productivity mobile app built with React Native and FastAPI.",
            18: "JoshFit: Fitness and health tracking app with workout routines, meal plans, and AI integrations.",
            19: "InsBarrera App: Mobile e-commerce app for bakery with shopping cart built with Flutter and C# API.",
            20: "Classroom Paused (Aula en Pausa): Interactive educational mobile app for children during school hours in React Native."
        } as Record<number, string>
    }
};
