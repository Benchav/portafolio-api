export interface Project {
    id: number;
    title: string;
    category: "Frontend" | "Backend" | "Mobile";
    tags: string[];
    link: string;
    demoCredentials?: string;
}
export declare const sharedData: {
    name: string;
    title: string;
    education: string;
    location: string;
    email: string;
    phone: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    portfolioUrl: string;
    stats: {
        yearsExperience: number;
        projectsShipped: number;
    };
    certifications: string[];
    languages: string[];
    projects: ({
        id: number;
        title: string;
        category: "Frontend";
        tags: string[];
        link: string;
        demoCredentials: string;
    } | {
        id: number;
        title: string;
        category: "Frontend";
        tags: string[];
        link: string;
        demoCredentials?: never;
    } | {
        id: number;
        title: string;
        category: "Backend";
        tags: string[];
        link: string;
        demoCredentials?: never;
    } | {
        id: number;
        title: string;
        category: "Mobile";
        tags: string[];
        link: string;
        demoCredentials?: never;
    })[];
};
export declare const content: {
    es: {
        about: {
            title: string;
            bio: string;
            location: string;
        };
        experience: {
            list: {
                company: string;
                role: string;
                period: string;
                description: string;
                technologies: string[];
            }[];
        };
        projectDescriptions: Record<number, string>;
        tech: {
            categories: {
                title: string;
                skills: string[];
            }[];
        };
    };
    en: {
        about: {
            title: string;
            bio: string;
            location: string;
        };
        experience: {
            list: {
                company: string;
                role: string;
                period: string;
                description: string;
                technologies: string[];
            }[];
        };
        projectDescriptions: Record<number, string>;
    };
};
//# sourceMappingURL=content.d.ts.map