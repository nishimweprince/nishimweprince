import { DM_Sans } from 'next/font/google';
import Script from 'next/script';
import { ReactNode } from 'react';
import { metadataConstants } from '@/constants/metadata.constants';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = metadataConstants;

const themeScript = `
  try {
    const saved = localStorage.getItem('portfolio-theme');
    const dark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nishimwe Prince',
    jobTitle: 'Full-Stack Developer & AI Agent Architect',
    url: 'https://nishimweprince.dev',
    sameAs: [
      'https://linkedin.com/in/nishimweprince',
      'https://github.com/nishimweprince',
      'https://x.com/nishimweprince',
    ],
    description:
      'Full-stack engineer building Trading Algos, reliable web applications, AI agents, and public-scale platforms.',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={dmSans.variable}>
        {children}
      </body>
    </html>
  );
}
