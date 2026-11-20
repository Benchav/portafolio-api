export interface Project {
    id: number;
    title: string;
    category: "Corporate" | "Systems" | "AgroTech" | "Backend" | "Mobile" | "Frontend";
    tags: string[];
    link: string;
    demoCredentials?: string;
}

export const sharedData = {
    name: "Joshua Benjamín Chávez Lau",
    title: "Ingeniero de Sistemas & Full Stack Developer | Especialista en Arquitectura de Software",
    education: "Estudiante de último año de Ingeniería de Sistemas - UNAN-Cur Carazo",
    location: "Jinotepe, Carazo, Nicaragua",
    email: "joshua44benja@gmail.com",
    phone: "+505 87156909",
    whatsapp: "https://api.whatsapp.com/send/?phone=50587156909&text&type=phone_number&app_absent=0",
    github: "https://github.com/Benchav",
    linkedin: "https://www.linkedin.com/in/joshua-ch%C3%A1vez-lau-44a65534b/?trk=public-profile-join-page",
    portfolioUrl: "https://joshuachavez.vercel.app/",
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
            id: 22,
            title: "Hotel Mi Bohío",
            category: "Corporate" as const,
            tags: ["React", "Vite", "PHP 8", "Reservas"],
            link: "https://mibohiosa.com"
        },
        {
            id: 21,
            title: "AgroSystem",
            category: "AgroTech" as const,
            tags: ["IoT", "Gemini 2.5", "Llama 3.3", "Image Analysis", "AI Chatbot"],
            link: "https://agrosystem.nicapages.site"
        },
        {
            id: 1,
            title: "Constructora Web",
            category: "Systems" as const,
            tags: ["React", "Vite", "Tailwind", "TypeScript", "Node.js"],
            link: "https://rikiconstructora.vercel.app/",
            demoCredentials: "Username: ceo | Password: 123"
        },
        {
            id: 2,
            title: "Gestión Zapatos (Payless System)",
            category: "Systems" as const,
            tags: ["HTML5", "CSS", "Node.js", "JavaScript"],
            link: "https://www.proyect.site/",
            demoCredentials: "Username: managua | Password: 123456"
        },
        {
            id: 3,
            title: "AgroControl IoT",
            category: "AgroTech" as const,
            tags: ["React", "Vite", "Tailwind", "Node.js", "SQLite"],
            link: "https://agrocontrol-tan.vercel.app/"
        },
        {
            id: 5,
            title: "Veritas Abogados",
            category: "Corporate" as const,
            tags: ["React", "Vite", "Tailwind"],
            link: "https://www.veritasabogado.com/"
        },
        {
            id: 6,
            title: "ETNS School",
            category: "Corporate" as const,
            tags: ["React", "Vite", "Tailwind"],
            link: "https://www.etnschool.com/"
        },
        {
            id: 8,
            title: "Edu-Incluye",
            category: "Systems" as const,
            tags: ["React", "Vite", "Tailwind"],
            link: "https://edu-incluye.vercel.app/"
        },
        {
            id: 9,
            title: "Avicon System",
            category: "Systems" as const,
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
            tags: ["React", "TypeScript", "Tailwind", "Gemini 2.5", "Llama 3.3 30B"],
            link: "https://github.com/Benchav"
        },
        {
            id: 19,
            title: "InsBarrera App",
            category: "Mobile" as const,
            tags: ["Flutter", "Dart", "C# API", "E-commerce"],
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
            bio: "Ingeniero de Sistemas y desarrollador Full Stack con 3 años de experiencia diseñando, construyendo y desplegando soluciones web para pymes, instituciones y clientes. Especializado en sistemas de gestión ERP/PWA, aplicaciones multisucursal, e-commerce y plataformas de citas y cuentas por cobrar. Experiencia de extremo a extremo en arquitectura, desarrollo frontend y backend, bases de datos y despliegue en VPS, hosting y servidores locales. También utilizo flujos de automatización y herramientas de IA para acelerar el desarrollo y mejorar la calidad de las entregas.",
            location: "Jinotepe, Carazo, Nicaragua"
        },
        experience: {
            list: [
                {
                    company: "Hotel Mi Bohío",
                    role: "Desarrollador Web & E-commerce",
                    period: "Mediados 2026 – 25 oct. 2026",
                    description: "Diseño y desarrollo de sitio web, catálogo digital y módulo de reservación de citas para el sector hotelero, como servicio profesional. Implementación de una experiencia responsive orientada a la presentación de servicios y reservas.",
                    technologies: ["Web", "E-commerce", "UI/UX", "React", "Vite", "PHP 8"]
                },
                {
                    company: "Insumos Barrera",
                    role: "Desarrollador Full Stack",
                    period: "Feb. – may. 2026",
                    description: "Diseño e implementación de un ERP multisucursal en formato PWA para centralizar en tiempo real las operaciones de dos sucursales, con resiliencia offline ante caídas de red. Despliegue en VPS y servidor físico en Diriamba como réplica, asegurando disponibilidad y continuidad operativa.",
                    technologies: ["React", "TypeScript", "PWA", "Node.js", "SQLite", "VPS", "JWT", "Offline-First"]
                },
                {
                    company: "Panadería y Repostería Alicia",
                    role: "Desarrollador de Software",
                    period: "Dic. 2025 – 20 feb. 2026",
                    description: "Desarrollo e implementación de un ERP web para centralizar la producción, el inventario y las ventas del local en una sola plataforma. Despliegue en hosting web para la operación diaria del negocio.",
                    technologies: ["React", "TypeScript", "Node.js", "SQLite", "REST API", "Tailwind CSS"]
                },
                {
                    company: "Clientes corporativos e institucionales",
                    role: "Desarrollador Web",
                    period: "Feb. – ago. 2025",
                    description: "Desarrollo de sitios web y soluciones digitales para empresas e instituciones, en colaboración con un equipo de desarrollo bajo contratación de servicios profesionales. Integración de APIs y despliegue de soluciones adaptadas a cada cliente.",
                    technologies: ["React", "TypeScript", "Vite", "UI/UX", "Tailwind CSS"]
                },
                {
                    company: "Blessed Smile · Clínica Dental",
                    role: "Desarrollador Web",
                    period: "2025",
                    description: "Diseño y desarrollo de un sistema web unificado para gestionar citas y cuentas por cobrar de una clínica dental en Jinotepe, Carazo. Centralización de agenda, pacientes y estado de cuenta en una sola plataforma para optimizar la operación del consultorio.",
                    technologies: ["Web", "UI/UX", "React", "Tailwind CSS"]
                },
                {
                    company: "JUDC, Hackathon Nicaragua y Rallys Latinoamericanos",
                    role: "Participante Full Stack",
                    period: "2023 – 2025",
                    description: "Participación en JUDC, Hackathon Nicaragua y rallys latinoamericanos, desarrollando prototipos funcionales bajo presión y entregas contrarreloj. Incluye un sistema de facturación con C# y ASP.NET para JUDC y AgroControl, una plataforma IoT para huertos verticales y horizontales en el Rally Tecnológico de Innovación (2° Lugar).",
                    technologies: ["C#", "ASP.NET", "SQL Server", "TypeScript", "React + Vite", "SQLite", "IoT"]
                },
                {
                    company: "Freelance",
                    role: "Desarrollador Web Remoto",
                    period: "2024 – ene. 2025",
                    description: "Desarrollo de sitios web a medida, webs corporativas e integración de APIs para clientes remotos. Colaboración directa con clientes y equipos de trabajo en modalidad remota.",
                    technologies: ["TypeScript", "React", "Vite", "UI/UX", "Tailwind CSS"]
                }
            ]
        },
        projectDescriptions: {
            22: "Hotel Mi Bohío: Sitio web corporativo para hotel boutique en Diriamba, Carazo con gestión de citas, reservaciones y catálogo en React + Vite con backend PHP 8.",
            21: "AgroSystem: Plataforma de monitoreo de parcelas y subastas ganaderas con IA (Gemini 2.5 para análisis de imágenes de síntomas y chatbot con Llama 3.3).",
            1: "Constructora Web: Sistema web completo aplicado a constructoras. Panel administrativo con credenciales de demostración activas (Username: ceo | Password: 123).",
            2: "Gestión Zapatos (Payless System): Sistema de inventario para Casa Matriz y sucursales con manejo de dominios (Username: managua | Password: 123456).",
            3: "AgroControl IoT: Sistema de gestión y control IoT en huertos verticales y horizontales con telemetría en tiempo real (2° Lugar Rally 2025).",
            5: "Veritas Abogados: Página web corporativa profesional para firma legal con diseño moderno y alta conversión.",
            6: "ETNS School: Plataforma web para academia de inglés en San Marcos.",
            8: "Edu-Incluye: Plataforma educativa accesible para el aprendizaje de lenguaje de señas.",
            9: "Avicon System: Gestor avícola completo para control de producción, cuidados sanitarios y alimentación.",
            10: "Email API Service: Microservicio FastAPI en Python para automatización de envío de correos electrónicos.",
            11: "Fast Tasko API: Backend para aplicación de gestión de tareas con autenticación y Firebase.",
            12: "API Insumos Barrera: API RESTful completa construida en ASP.NET con operaciones CRUD para insumos.",
            13: "API Zapatos (Payless API): Backend Node.js para gestión de inventarios con control de roles y permisos.",
            14: "API Constructora: Backend complejo con 13 modelos relacionales, validaciones robustas y seguridad en MongoDB.",
            15: "Avicon API: Backend especializado en Node.js y TypeScript para el sector avícola.",
            16: "API Insumos DDD: API en ASP.NET implementando arquitectura limpia y Domain Driven Design (DDD).",
            17: "Tasko Mobile: Aplicación móvil de productividad y organización de tareas desarrollada en React Native y FastAPI.",
            18: "JoshFit: Aplicación fitness con reconocimiento de alimentos y cálculo de calorías con Gemini 2.5, y chatbot de entrenamiento con Llama 3.3 30B.",
            19: "InsBarrera App: Aplicación móvil de comercio electrónico para pastelería con carrito de compras en Flutter y backend C#.",
            20: "Aula en Pausa: Aplicación educativa interactiva para niños en horario escolar construida con React Native."
        } as Record<number, string>,
        tech: {
            categories: [
                {
                    title: "Frontend",
                    skills: ["React", "Next.js", "Angular", "React Native", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "HTML5", "CSS3", "UI/UX"]
                },
                {
                    title: "Backend",
                    skills: ["Node.js", "NestJS", "Express", "REST API", "C#", ".NET Core", "ASP.NET", "DDD", "Python", "FastAPI", "PHP 8", "Offline-First", "JWT"]
                },
                {
                    title: "Bases de Datos",
                    skills: ["SQLite", "SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Firestore / Firebase", "Azure SQL"]
                },
                {
                    title: "DevOps & Cloud",
                    skills: ["Docker", "Firebase", "Vercel", "Hostinger VPS", "Servicios Cloud", "Git", "GitHub"]
                },
                {
                    title: "IA Aplicada",
                    skills: ["OpenAI API", "GPT-4", "Gemini API (2.5)", "Llama 3.3", "Groq", "Análisis de imágenes", "Chatbots con IA", "Ingeniería de prompts", "Claude Code", "OpenCode", "MCP"]
                },
                {
                    title: "Herramientas",
                    skills: ["Git", "OpenCode", "Postman", "Jira", "PyCharm", "Anaconda", "Trello", "Linux"]
                }
            ]
        }
    },
    en: {
        about: {
            title: "About Me",
            bio: "Systems Engineer and Full Stack Developer with 3 years of experience designing, building, and deploying web solutions for SMEs, institutions, and clients. Specialized in ERP/PWA management systems, multi-branch applications, e-commerce, and appointment and accounts receivable platforms. End-to-end experience across architecture, frontend and backend development, databases, and deployment on VPS, web hosting, and local servers. I also use automation workflows and AI tools to accelerate development and improve delivery quality.",
            location: "Jinotepe, Carazo, Nicaragua"
        },
        experience: {
            list: [
                {
                    company: "Hotel Mi Bohío",
                    role: "Web & E-commerce Developer",
                    period: "Mid-2026 – Oct 25, 2026",
                    description: "Designed and developed a website, digital catalog, and appointment booking module for the hospitality sector as a professional service. Implemented a responsive experience focused on presenting services and bookings.",
                    technologies: ["Web", "E-commerce", "UI/UX", "React", "Vite", "PHP 8"]
                },
                {
                    company: "Insumos Barrera",
                    role: "Full Stack Developer",
                    period: "Feb – May 2026",
                    description: "Designed and implemented a multi-branch ERP as a PWA to centralize two branches' operations in real time, with offline resilience during network outages. Deployed on a VPS with a physical server in Diriamba as a replica, ensuring availability and operational continuity.",
                    technologies: ["React", "TypeScript", "PWA", "Node.js", "SQLite", "VPS", "JWT", "Offline-First"]
                },
                {
                    company: "Panadería y Repostería Alicia",
                    role: "Software Developer",
                    period: "Dec 2025 – Feb 20, 2026",
                    description: "Developed and implemented a web ERP to centralize the bakery's production, inventory, and sales in a single platform. Deployed on web hosting for daily business operations.",
                    technologies: ["React", "TypeScript", "Node.js", "SQLite", "REST API", "Tailwind CSS"]
                },
                {
                    company: "Corporate & Institutional Clients",
                    role: "Web Developer",
                    period: "Feb – Aug 2025",
                    description: "Developed websites and digital solutions for companies and institutions in collaboration with a development team under a professional services contract. Integrated APIs and deployed solutions tailored to each client.",
                    technologies: ["React", "TypeScript", "Vite", "UI/UX", "Tailwind CSS"]
                },
                {
                    company: "Blessed Smile · Dental Clinic",
                    role: "Web Developer",
                    period: "2025",
                    description: "Designed and developed a unified web system to manage appointments and accounts receivable for a dental clinic in Jinotepe, Carazo. Centralized scheduling, patient records, and account status in a single platform to streamline clinic operations.",
                    technologies: ["Web", "UI/UX", "React", "Tailwind CSS"]
                },
                {
                    company: "JUDC, Hackathon Nicaragua & Latin American Rallies",
                    role: "Full Stack Participant",
                    period: "2023 – 2025",
                    description: "Participated in JUDC, Hackathon Nicaragua, and Latin American rallies, building functional prototypes under pressure and tight deadlines. Includes a C# and ASP.NET billing system for JUDC and AgroControl, an IoT platform for vertical and horizontal gardens at the Technology Innovation Rally (2nd Place).",
                    technologies: ["C#", "ASP.NET", "SQL Server", "TypeScript", "React + Vite", "SQLite", "IoT"]
                },
                {
                    company: "Freelance",
                    role: "Remote Web Developer",
                    period: "2024 – Jan 2025",
                    description: "Built custom websites, corporate sites, and API integrations for remote clients. Collaborated directly with clients and teams in a remote setting.",
                    technologies: ["TypeScript", "React", "Vite", "UI/UX", "Tailwind CSS"]
                }
            ]
        },
        projectDescriptions: {
            22: "Hotel Mi Bohío: Corporate website for a boutique hotel in Diriamba, Carazo. Includes booking management and catalog in React + Vite with PHP 8 backend.",
            21: "AgroSystem: Crop monitoring and livestock auction platform with AI (Gemini 2.5 for plant symptom image analysis and Llama 3.3 chatbot).",
            1: "Construction Web (Constructora Web): Complete web system for construction companies. Admin panel with active demo credentials (Username: ceo | Password: 123).",
            2: "Shoe Management (Payless System): Multi-branch inventory system with domain handling (Username: managua | Password: 123456).",
            3: "AgroControl IoT: IoT monitoring and control platform for vertical and horizontal farming (2nd Place 2025 Rally).",
            5: "Veritas Lawyers: Professional corporate website for a legal firm.",
            6: "ETNS School: Educational platform for English academy in San Marcos.",
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
            18: "JoshFit: Fitness and health tracking app with Gemini 2.5 food recognition and calories estimation, and Llama 3.3 30B workout chatbot.",
            19: "InsBarrera App: Mobile e-commerce app for bakery with shopping cart built with Flutter and C# API.",
            20: "Classroom Paused (Aula en Pausa): Interactive educational mobile app for children during school hours in React Native."
        } as Record<number, string>
    }
};
