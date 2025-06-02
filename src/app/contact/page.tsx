import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact - Tr3ble Portfolio | Get In Touch with Full-Stack Developer",
    description: "Contact Tr3ble (@tr3ble) - Professional full-stack TypeScript developer. Available for freelance projects, collaboration, and full-time opportunities. Let's build something amazing together.",
    keywords: [
        "Contact Tr3ble",
        "Hire TypeScript developer",
        "Freelance developer",
        "Full-stack developer contact",
        "React developer hire",
        "Next.js developer contact",
        "Software engineer contact",
        "Web development services"
    ],
    openGraph: {
        title: "Contact - Tr3ble Portfolio",
        description: "Get in touch with Tr3ble - Professional full-stack TypeScript developer available for projects and opportunities.",
        url: "https://tr3ble.tech/contact",
        siteName: "Tr3ble Portfolio",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact - Tr3ble Portfolio",
        description: "Get in touch with Tr3ble - Professional full-stack TypeScript developer.",
        creator: "@tr3ble",
    },
    alternates: {
        canonical: "https://tr3ble.tech/contact",
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

const contactMethods = [
    {
        method: "Email",
        value: "contact@tr3ble.tech",
        href: "mailto:contact@tr3ble.tech",
        description: "Best for detailed project discussions and formal inquiries",
        icon: "📧"
    },
    {
        method: "Discord",
        value: "@tr3ble",
        href: "#",
        description: "Quick messages and real-time communication",
        icon: "💬"
    },
    {
        method: "GitHub",
        value: "github.com/tr3ble",
        href: "https://github.com/tr3ble",
        description: "Check out my code and contribute to projects",
        icon: "🐙"
    }
];

const services = [
    {
        title: "Full-Stack Development",
        description: "End-to-end web application development using modern TypeScript stack",
        technologies: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
        title: "Frontend Development", 
        description: "Modern, responsive user interfaces with focus on performance and UX",
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
        title: "Backend Development",
        description: "Scalable APIs and server-side applications with robust architecture",
        technologies: ["Node.js", "NestJS", "PostgreSQL", "Docker"]
    },
    {
        title: "Consulting & Code Review",
        description: "Technical consultation, code auditing, and architecture planning",
        technologies: ["Best Practices", "Performance", "Security", "Scalability"]
    }
];

export default function ContactPage() {
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
                            <li aria-current="page">Contact</li>
                        </ol>
                    </nav>
                    
                    <h1 
                        id="main-content"
                        className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"
                    >
                        Let's Work Together
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        I'm available for freelance projects, collaborations, and full-time opportunities. 
                        Let's discuss how I can help bring your ideas to life.
                    </p>
                </header>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Methods */}
                    <section aria-labelledby="contact-methods-heading">
                        <h2 id="contact-methods-heading" className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                            Get In Touch
                        </h2>
                        
                        <div className="space-y-4" role="list" aria-label="Contact methods">
                            {contactMethods.map((contact, index) => (
                                <article 
                                    key={index}
                                    className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md rounded-xl ring-1 ring-neutral-300 dark:ring-neutral-600 p-6 hover:shadow-lg hover:shadow-neutral-200/20 dark:hover:shadow-neutral-900/30 transition-all duration-300"
                                    role="listitem"
                                    itemScope
                                    itemType="https://schema.org/ContactPoint"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl" aria-hidden="true">{contact.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1" itemProp="contactType">
                                                {contact.method}
                                            </h3>
                                            <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-2">
                                                {contact.description}
                                            </p>
                                            {contact.href !== "#" ? (
                                                <a 
                                                    href={contact.href}
                                                    target={contact.method === "GitHub" ? "_blank" : undefined}
                                                    rel={contact.method === "GitHub" ? "noopener noreferrer" : undefined}
                                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                                                    itemProp="url"
                                                    aria-label={`Contact via ${contact.method}: ${contact.value}`}
                                                >
                                                    {contact.value}
                                                </a>
                                            ) : (
                                                <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                                                    {contact.value}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Availability Status */}
                        <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                                <span className="font-semibold text-green-800 dark:text-green-400">Available for New Projects</span>
                            </div>
                            <p className="text-green-700 dark:text-green-300 text-sm">
                                Currently accepting new freelance projects and collaboration opportunities. 
                                Typical response time: 24-48 hours.
                            </p>
                        </div>
                    </section>

                    {/* Services */}
                    <section aria-labelledby="services-heading">
                        <h2 id="services-heading" className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                            What I Can Help You With
                        </h2>
                        
                        <div className="space-y-6" role="list" aria-label="Services offered">
                            {services.map((service, index) => (
                                <article 
                                    key={index}
                                    className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md rounded-xl ring-1 ring-neutral-300 dark:ring-neutral-600 p-6"
                                    role="listitem"
                                    itemScope
                                    itemType="https://schema.org/Service"
                                >
                                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2" itemProp="name">
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-3" itemProp="description">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
                                        {service.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs"
                                                role="listitem"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>

                {/* FAQ Section */}
                <section className="mt-16 max-w-4xl mx-auto" aria-labelledby="faq-heading">
                    <h2 id="faq-heading" className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6" itemScope itemType="https://schema.org/FAQPage">
                        <article className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md rounded-xl ring-1 ring-neutral-300 dark:ring-neutral-600 p-6" itemScope itemType="https://schema.org/Question">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2" itemProp="name">
                                What's your hourly rate?
                            </h3>
                            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                <p className="text-neutral-600 dark:text-neutral-300 text-sm" itemProp="text">
                                    My rates vary based on project complexity and timeline. Contact me for a detailed quote tailored to your specific needs.
                                </p>
                            </div>
                        </article>

                        <article className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md rounded-xl ring-1 ring-neutral-300 dark:ring-neutral-600 p-6" itemScope itemType="https://schema.org/Question">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2" itemProp="name">
                                How long do projects typically take?
                            </h3>
                            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                <p className="text-neutral-600 dark:text-neutral-300 text-sm" itemProp="text">
                                    Project timelines range from 2-12 weeks depending on scope. I provide detailed timelines during the planning phase.
                                </p>
                            </div>
                        </article>

                        <article className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md rounded-xl ring-1 ring-neutral-300 dark:ring-neutral-600 p-6" itemScope itemType="https://schema.org/Question">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2" itemProp="name">
                                Do you work with teams?
                            </h3>
                            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                <p className="text-neutral-600 dark:text-neutral-300 text-sm" itemProp="text">
                                    Yes! I collaborate well with existing development teams and can integrate into your workflow and tools.
                                </p>
                            </div>
                        </article>

                        <article className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md rounded-xl ring-1 ring-neutral-300 dark:ring-neutral-600 p-6" itemScope itemType="https://schema.org/Question">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2" itemProp="name">
                                What time zones do you work in?
                            </h3>
                            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                <p className="text-neutral-600 dark:text-neutral-300 text-sm" itemProp="text">
                                    I'm flexible with time zones and can accommodate most regions. Clear communication ensures smooth collaboration regardless of location.
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </div>

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact - Tr3ble Portfolio",
                        "description": "Contact information for Tr3ble, professional full-stack TypeScript developer",
                        "url": "https://tr3ble.tech/contact",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Tr3ble",
                            "jobTitle": "Full-Stack TypeScript Developer",
                            "email": "contact@tr3ble.tech",
                            "url": "https://tr3ble.tech",
                            "sameAs": [
                                "https://github.com/tr3ble"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "Professional",
                                "email": "contact@tr3ble.tech",
                                "availableLanguage": ["English", "Russian"]
                            }
                        }
                    })
                }}
            />
        </main>
    );
}
