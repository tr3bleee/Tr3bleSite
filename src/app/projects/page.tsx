import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects - Tr3ble Portfolio | Full-Stack TypeScript Developer Projects",
    description: "Explore the portfolio projects of Tr3ble (@tr3ble) - Full-stack TypeScript developer. Showcasing React, Next.js, Node.js applications and modern web development solutions.",
    keywords: [
        "Tr3ble projects",
        "React projects",
        "Next.js projects",
        "TypeScript projects",
        "Node.js projects",
        "Full-stack projects",
        "Web development portfolio",
        "Software engineering projects"
    ],
    openGraph: {
        title: "Projects - Tr3ble Portfolio",
        description: "Explore the portfolio projects of Tr3ble - Full-stack TypeScript developer showcasing modern web applications.",
        url: "https://tr3ble.tech/projects",
        siteName: "Tr3ble Portfolio",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects - Tr3ble Portfolio",
        description: "Explore the portfolio projects of Tr3ble - Full-stack TypeScript developer.",
        creator: "@tr3ble",
    },
    alternates: {
        canonical: "https://tr3ble.tech/projects",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const projects = [
    {
        title: "Portfolio Website",
        description: "Modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dark/light mode, responsive design, and optimal SEO.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
        status: "Live",
        type: "Web Application"
    },
    {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with React frontend, Node.js backend, and PostgreSQL database. Includes payment processing and admin dashboard.",
        technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
        status: "In Development",
        type: "Full-Stack Application"
    },
    {
        title: "Task Management System",
        description: "Collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
        technologies: ["Next.js", "NestJS", "Docker", "WebSockets"],
        status: "Planning",
        type: "SaaS Application"
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-neutral-100 dark:from-neutral-900 dark:to-slate-900">
            {/* Skip to main content link for accessibility */}
            <a 
                href="#main-content" 
                className="skip-link"
                aria-label="Skip to main content"
            >
                Skip to main content
            </a>

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <header className="text-center mb-12">
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <ol className="flex justify-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li>
                                <Link 
                                    href="/" 
                                    className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                                    aria-label="Go to homepage"
                                >
                                    Home
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li aria-current="page">Projects</li>
                        </ol>
                    </nav>
                    
                    <h1 
                        id="main-content"
                        className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
                        itemProp="name"
                    >
                        My Projects
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        A showcase of my full-stack development projects using modern technologies like TypeScript, React, Next.js, and Node.js.
                    </p>
                </header>

                {/* Projects Grid */}
                <section 
                    className="grid gap-8 md:gap-10 max-w-6xl mx-auto"
                    aria-labelledby="projects-heading"
                    itemScope
                    itemType="https://schema.org/CreativeWork"
                >
                    <h2 id="projects-heading" className="sr-only">Portfolio Projects</h2>
                    
                    {projects.map((project, index) => (
                        <article 
                            key={index}
                            className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md rounded-2xl ring-2 ring-neutral-300 dark:ring-neutral-600 p-6 md:p-8 hover:shadow-lg hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300 ease-out hover:ring-neutral-400 dark:hover:ring-neutral-500"
                            itemScope
                            itemType="https://schema.org/SoftwareApplication"
                        >
                            <header className="mb-4">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 
                                        className="text-2xl font-bold text-neutral-900 dark:text-neutral-100"
                                        itemProp="name"
                                    >
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span 
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                project.status === 'Live' 
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                    : project.status === 'In Development'
                                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                            }`}
                                            aria-label={`Project status: ${project.status}`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2" itemProp="applicationCategory">
                                    {project.type}
                                </p>
                            </header>

                            <p 
                                className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed"
                                itemProp="description"
                            >
                                {project.description}
                            </p>

                            <footer>
                                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm"
                                            role="listitem"
                                            itemProp="programmingLanguage"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </footer>

                            {/* Hidden structured data */}
                            <div className="sr-only">
                                <span itemProp="creator" itemScope itemType="https://schema.org/Person">
                                    <span itemProp="name">Tr3ble</span>
                                    <span itemProp="jobTitle">Full-Stack Developer</span>
                                </span>
                                <span itemProp="dateCreated">2024</span>
                                <span itemProp="inLanguage">en</span>
                            </div>
                        </article>
                    ))}
                </section>

                {/* Call to Action */}
                <section className="text-center mt-16" aria-labelledby="cta-heading">
                    <h2 id="cta-heading" className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                        Interested in Working Together?
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
                        I'm always open to discussing new projects and opportunities. Let's build something amazing together.
                    </p>
                    <Link 
                        href="/#contact"
                        className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-semibold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
                        aria-label="Get in touch for project collaboration"
                    >
                        Get In Touch
                    </Link>
                </section>
            </div>

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Projects - Tr3ble Portfolio",
                        "description": "Portfolio projects showcase by Tr3ble, full-stack TypeScript developer",
                        "url": "https://tr3ble.tech/projects",
                        "author": {
                            "@type": "Person",
                            "name": "Tr3ble",
                            "jobTitle": "Full-Stack TypeScript Developer",
                            "url": "https://tr3ble.tech"
                        },
                        "mainEntity": {
                            "@type": "ItemList",
                            "numberOfItems": projects.length,
                            "itemListElement": projects.map((project, index) => ({
                                "@type": "SoftwareApplication",
                                "position": index + 1,
                                "name": project.title,
                                "description": project.description,
                                "applicationCategory": project.type,
                                "programmingLanguage": project.technologies,
                                "creator": {
                                    "@type": "Person",
                                    "name": "Tr3ble"
                                }
                            }))
                        }
                    })
                }}
            />
        </main>
    );
}
