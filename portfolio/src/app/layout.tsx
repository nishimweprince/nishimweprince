import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { metadataConstants } from '@/constants/metadata.constants';
import { ReactNode } from 'react';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = metadataConstants;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nishimwe Prince',
    jobTitle: 'Full-Stack Developer & AI Agent Architect',
    url: 'https://nishimweprince.dev',
    sameAs: [
      'https://linkedin.com/in/nishimweprince',
      'https://github.com/nishimweprince',
      'https://twitter.com/nishimweprince',
    ],
    description: 'Full-Stack Developer specializing in high-performance web applications and AI agent architecture.',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

