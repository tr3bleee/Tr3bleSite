import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tr3ble - Full-Stack TypeScript Developer Portfolio',
    short_name: 'Tr3ble Portfolio',
    description: 'Professional portfolio of Tr3ble - Full-stack TypeScript developer specializing in React, Next.js, Node.js and modern web development',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10b981',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    dir: 'ltr',
    categories: ['productivity', 'developer', 'portfolio'],
    screenshots: [
      {
        src: '/images/screenshot-wide.jpg',
        sizes: '1280x720',
        type: 'image/jpeg',
        form_factor: 'wide',
        label: 'Portfolio homepage on desktop'
      },
      {
        src: '/images/screenshot-narrow.jpg',
        sizes: '640x1136', 
        type: 'image/jpeg',
        form_factor: 'narrow',
        label: 'Portfolio homepage on mobile'
      }
    ],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon'
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: '/favicon-32x32.png', 
        sizes: '32x32',
        type: 'image/png'
      },
    ],
    shortcuts: [
      {
        name: 'View Skills',
        short_name: 'Skills',
        description: 'View technical skills and expertise',
        url: '/#skills',
        icons: [
          {
            src: '/icons/skills-shortcut.png',
            sizes: '96x96'
          }
        ]
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch via Telegram',
        url: 'https://t.me/tr3ble',
        icons: [
          {
            src: '/icons/contact-shortcut.png', 
            sizes: '96x96'
          }
        ]
      }
    ],
    related_applications: [],
    prefer_related_applications: false,
    launch_handler: {
      client_mode: 'navigate-existing'
    }
  }
}
