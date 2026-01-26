import { Metadata } from 'next';

export const metadataConstants: Metadata = {
  title: {
    default: 'Nishimwe Prince | Full-Stack Developer & AI Agent Architect',
    template: '%s | Nishimwe Prince',
  },
  description:
    'Full-Stack Developer specializing in high-performance web applications and AI agent architecture. Explore projects, professional experience, and technical certifications by Nishimwe Prince.',
  keywords: [
    'Nishimwe Prince',
    'Full-Stack Developer',
    'AI Agent Architect',
    'Software Engineer',
    'Next.js Developer',
    'React Expert',
    'TypeScript Developer',
    'Web Application Security',
    'Cloud Architecture',
    'AI Integration',
    'Portfolio',
    'Resume',
    'Senior Developer',
    'Tech Leadership',
    'Remote Developer',
    'Kigali Developer',
  ],
  authors: [{ name: 'Nishimwe Prince', url: 'https://nishimweprince.dev' }],
  creator: 'Nishimwe Prince',
  publisher: 'Nishimwe Prince',
  metadataBase: new URL('https://nishimweprince.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Nishimwe Prince | Full-Stack Developer & AI Agent Architect',
    description:
      'Explore the architectural patterns and high-performance applications built by Nishimwe Prince. Expert in Next.js, AI, and scalable web tech.',
    url: 'https://nishimweprince.dev',
    siteName: 'Nishimwe Prince Portfolio',
    images: [
      {
        url: '/og-image.png', // Assuming user might add this or I can suggest it
        width: 1200,
        height: 630,
        alt: 'Nishimwe Prince - Full-Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishimwe Prince (@nishimweprince)',
    description: 'Full-Stack Developer & AI Agent Architect building the future of web.',
    creator: '@nishimweprince',
    images: ['/og-image.png'],
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
  category: 'technology',
  verification: {
    google: 'your-google-verification-code', // Placeholder
  },
};
