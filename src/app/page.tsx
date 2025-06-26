import AboutCard from "@/components/AboutCard";
import SkillsCard from "@/components/SkillsCard";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tr3ble - Full-Stack TypeScript Developer Portfolio | React, Next.js, Node.js Expert",
    description: "Explore the portfolio of Tr3ble (@tr3ble), a 17-year-old full-stack TypeScript developer. Specializing in React, Next.js, Node.js, NestJS, Tailwind CSS, and Docker. Professional web development services available.",
    keywords: [
        "Tr3ble portfolio",
        "Full-stack developer portfolio", 
        "TypeScript developer",
        "React developer portfolio",
        "Next.js developer",
        "Node.js expert",
        "Young software engineer",
        "Web development services",
        "Frontend backend developer",
        "Modern web applications"
    ],
    openGraph: {
        title: "Tr3ble - Full-Stack TypeScript Developer Portfolio",
        description: "17-year-old full-stack developer specializing in TypeScript, React, and Node.js. View technical expertise.",
        type: 'website',
        url: 'https://tr3ble.tech',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tr3ble - Full-Stack TypeScript Developer Portfolio',
        description: '17-year-old full-stack developer specializing in TypeScript, React, and Node.js. View technical expertise.',
    },
    alternates: {
        canonical: 'https://tr3ble.tech',
    },
};

export default function Home() {
    return (
        <>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50">
                Skip to main content
            </a>
            
            <main 
                id="main-content"
                className="opacity-100 -translate-y-2 scale-[100%] grid place-items-center min-h-screen pt-8 sm:pt-12 md:pt-16 lg:pt-0 pb-20 sm:pb-24 gap-12 md:gap-16 lg:gap-20 xl:justify-center px-4 sm:px-6 md:px-8 smooth relative"
                role="main"
                aria-label="Portfolio homepage showcasing Tr3ble's development skills and experience"
            >
                <div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 via-emerald-300/5 to-transparent blur-3xl" aria-hidden="true"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl" aria-hidden="true"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl" aria-hidden="true"></div>
                
                <div className="w-full max-w-[85rem] mx-auto relative z-10">
                    <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
                        <section 
                            className="grid items-start gap-6 md:gap-8 w-full"
                            aria-labelledby="about-heading"
                        >
                            <h1 id="about-heading" className="sr-only">
                                About Tr3ble - Full-Stack TypeScript Developer
                            </h1>
                            <AboutCard/>
                        </section>
                        
                        <section 
                            className="grid items-stretch gap-6 md:gap-8"
                            aria-labelledby="skills-heading"
                        >
                            <h2 id="skills-heading" className="sr-only">
                                Technical Skills and Expertise
                            </h2>
                            <SkillsCard/>
                        </section>
                    </div>
                </div>
            </main>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        "                        mainEntity": {
                            "@type": "Person",
                            "@id": "https://tr3ble.tech/#person",
                            "name": "Tr3ble",
                            "alternateName": "@tr3ble",
                            "description": "17-year-old full-stack TypeScript developer",
                            "url": "https://tr3ble.tech",
                            "jobTitle": "Full-Stack TypeScript Developer",
                            "knowsAbout": [
                                {
                                    "@type": "Thing",
                                    "name": "TypeScript",
                                    "description": "Primary programming language"
                                },
                                {
                                    "@type": "Thing", 
                                    "name": "React",
                                    "description": "Frontend JavaScript library"
                                },
                                {
                                    "@type": "Thing",
                                    "name": "Next.js", 
                                    "description": "React framework for production"
                                },
                                {
                                    "@type": "Thing",
                                    "name": "Node.js",
                                    "description": "JavaScript runtime for backend"
                                },
                                {
                                    "@type": "Thing",
                                    "name": "NestJS",
                                    "description": "Node.js framework for scalable applications"
                                },
                                {
                                    "@type": "Thing",
                                    "name": "Tailwind CSS",
                                    "description": "Utility-first CSS framework"
                                },
                                {
                                    "@type": "Thing",
                                    "name": "Docker",
                                    "description": "Containerization platform"
                                }
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "professional",
                                "url": "https://t.me/tr3ble"
                            }
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://tr3ble.dev"
                                }
                            ]
                        }
                    })
                }}
            />
        </>
    );
}
