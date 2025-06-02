import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import "../styles/accessibility.css";
import ClientBody from "./ClientBody";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tr3ble - Full-Stack TypeScript Developer & Software Engineer Portfolio",
    description: "Professional portfolio of Tr3ble (@tr3ble) - Full-stack TypeScript developer specializing in React, Next.js, Node.js, and modern web development. 17-year-old software engineer building high-performance web applications and user experiences.",
    keywords: [
        "Tr3ble",
        "tr3ble",
        "@tr3ble",
        "Full-stack developer",
        "TypeScript developer",
        "React developer",
        "Next.js developer",
        "Node.js developer",
        "Software engineer",
        "Web developer",
        "Frontend developer",
        "Backend developer",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "NestJS",
        "Docker",
        "Portfolio",
        "Web development",
        "Software development",
        "Programming",
        "Tech portfolio",
        "Developer portfolio",
        "Fullstack engineer",
        "Modern web development",
        "Responsive design",
        "UI/UX development"
    ],
    authors: [{ name: "Tr3ble", url: "https://t.me/tr3ble" }],
    creator: "Tr3ble",
    publisher: "Tr3ble",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://tr3ble.tech'),
    alternates: {
        canonical: '/',
        languages: {
            'en': '/en',
            'ru': '/ru',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://tr3ble.tech',
        title: 'Tr3ble - Full-Stack TypeScript Developer Portfolio',
        description: 'Professional portfolio of Tr3ble - Full-stack TypeScript developer specializing in React, Next.js, Node.js. 17-year-old software engineer building modern web applications.',
        siteName: 'Tr3ble Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tr3ble - Full-Stack TypeScript Developer Portfolio',
        description: 'Professional portfolio of Tr3ble - Full-stack TypeScript developer specializing in React, Next.js, Node.js and modern web development.',
        creator: '@tr3ble',
        site: '@tr3ble',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        other: [
            { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#10b981' },
        ],
    },
    manifest: '/site.webmanifest',
    category: 'technology',
    classification: 'Software Development Portfolio',
    referrer: 'origin-when-cross-origin',
    appleWebApp: {
        capable: true,
        title: 'Tr3ble Portfolio',
        statusBarStyle: 'black-translucent',
    },
    applicationName: 'Tr3ble Portfolio',
    generator: 'Next.js',
    abstract: 'Portfolio website showcasing full-stack TypeScript development skills and projects',
    archives: ['https://tr3ble.dev/projects'],
    assets: ['https://tr3ble.dev/assets'],
    bookmarks: ['https://tr3ble.dev/bookmarks'],
    other: {
        'msapplication-TileColor': '#10b981',
        'msapplication-TileImage': '/mstile-144x144.png',
        'msapplication-config': '/browserconfig.xml',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'format-detection': 'telephone=no',
        'mobile-web-app-capable': 'yes',
        'application-name': 'Tr3ble Portfolio',
        'msapplication-tooltip': 'Tr3ble - Full-Stack TypeScript Developer Portfolio',
        'msapplication-starturl': '/',
        'msapplication-navbutton-color': '#10b981',
        'msapplication-window': 'width=1024;height=768',
        'msapplication-task': 'name=Portfolio;action-uri=/;icon-uri=/favicon.ico',
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    colorScheme: 'light dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="ltr">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="//t.me" />
            <link rel="dns-prefetch" href="//vercel.com" />
            <link rel="preload" href="/fonts/onest.woff" as="font" type="font/woff" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/raleway.woff" as="font" type="font/woff" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/zed-mono-extended.ttf" as="font" type="font/truetype" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/zed-icons.woff" as="font" type="font/woff" crossOrigin="anonymous" />
            
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Tr3ble",
                        "alternateName": "@tr3ble",
                        "url": "https://tr3ble.tech",
                        "image": "https://tr3ble.tech/images/profile.jpg",
                        "jobTitle": "Full-Stack TypeScript Developer",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Freelance"
                        },
                        "description": "17-year-old full-stack TypeScript developer specializing in React, Next.js, Node.js, and modern web development",
                        "knowsAbout": [
                            "TypeScript",
                            "React",
                            "Next.js",
                            "Node.js",
                            "NestJS",
                            "Tailwind CSS",
                            "Docker",
                            "Full-Stack Development",
                            "Frontend Development",
                            "Backend Development",
                            "Web Development"
                        ],
                        "sameAs": [
                            "https://t.me/tr3ble"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "professional",
                            "url": "https://t.me/tr3ble"
                        }
                    })
                }}
            />
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Tr3ble Portfolio",
                        "url": "https://tr3ble.tech",
                        "description": "Professional portfolio of Tr3ble - Full-stack TypeScript developer",
                        "author": {
                            "@type": "Person",
                            "name": "Tr3ble"
                        },
                        "inLanguage": ["en", "ru"],
                        "isAccessibleForFree": true,
                        "isFamilyFriendly": true
                    })
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Tr3ble - Full-Stack Development Services",
                        "description": "Professional full-stack TypeScript development services specializing in React, Next.js, and Node.js applications",
                        "provider": {
                            "@type": "Person",
                            "name": "Tr3ble"
                        },
                        "areaServed": "Worldwide",
                        "availableLanguage": ["English", "Russian"],
                        "serviceType": [
                            "Full-Stack Development",
                            "Frontend Development",
                            "Backend Development",
                            "React Development",
                            "Next.js Development",
                            "TypeScript Development"
                        ]
                    })
                }}
            />
        </head>
        <ClientBody>{children}</ClientBody>
        <SpeedInsights />
        <Analytics />
        </html>
    );
}
