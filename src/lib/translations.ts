export const translations = {
    en: {
        about: {
            title: "about.md",
            greeting: "Hi, I'm",
            description: "Hello! I'm 17 and I'm fullstack developer in Typescript. I began my web development journey in 2024, choosing Node.js and TypeScript as my primary stack. My goal is to become a full-stack developer capable of creating complex and high-performing web applications. I am currently delving deeper into front-end frameworks (e.g., React) and architectural patterns.",
            contactMe: "Contact me",
            darkTheme: "Dark theme",
            lightTheme: "Light theme"
        },
        skills: {
            title: "skills.md",
            heading: "🚀 Core Stack",
            description: "Technologies I work with daily",
            itemsCount: "items"
        }
    },
    ru: {
        about: {
            title: "обо мне.md",
            greeting: "Привет, я",
            description: "Привет! Мне 17 лет, и я fullstack разработчик на TypeScript. Я начал свой путь в веб-разработке в 2024 году, выбрав Node.js и TypeScript в качестве основного стека. Моя цель - стать full-stack разработчиком, способным создавать сложные и высокопроизводительные веб-приложения. В настоящее время я углубляюсь в изучение front-end фреймворков (например, React) и архитектурных паттернов.",
            contactMe: "Связаться",
            darkTheme: "Тёмная тема",
            lightTheme: "Светлая тема"
        },
        skills: {
            title: "навыки.md",
            heading: "🚀 Основной стек",
            description: "Технологии, с которыми я работаю ежедневно",
            itemsCount: "элементов"
        }
    }
} as const;

export type Language = keyof typeof translations;
