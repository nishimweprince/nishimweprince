import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nishimwe Prince | Portfolio & Resume',
  description:
    'Explore the professional portfolio and resume of Nishimwe Prince, a creative Senior Producer with 10+ years of experience in marketing, design, and project leadership. View work experience, contact details, and more.',
  keywords: [
    'Nishimwe Prince',
    'Portfolio',
    'Resume',
    'Senior Producer',
    'Marketing',
    'Design',
    'Project Management',
    'Creative Director',
    'New York',
    'Remote Work',
    'Professional Experience',
    'Contact',
    'About Nishimwe Prince',
  ],
  authors: [{ name: 'Nishimwe Prince', url: 'https://nishimweprince.dev' }],
  creator: 'Nishimwe Prince',
  openGraph: {
    title: 'Nishimwe Prince | Portfolio & Resume',
    description:
      'Explore the professional portfolio and resume of Nishimwe Prince, a creative Senior Producer with 10+ years of experience in marketing, design, and project leadership.',
    url: 'https://nishimweprince.dev',
    siteName: 'Nishimwe Prince Portfolio',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/v2/D4D03AQEutrb6cPVmfg/profile-displayphoto-shrink_800_800/B4DZPaF04bG0Ak-/0/1734530782886?e=1752710400&v=beta&t=mXWVHStHozfuaSX7x7Elob_5EJkB_r3MLq195dpP0vc',
        width: 800,
        height: 800,
        alt: 'Nishimwe Prince Profile Photo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishimwe Prince | Portfolio & Resume',
    description:
      'Explore the professional portfolio and resume of Nishimwe Prince, a creative Senior Producer with 10+ years of experience in marketing, design, and project leadership.',
    creator: '@nishimweprince',
    images: [
      'https://media.licdn.com/dms/image/v2/D4D03AQEutrb6cPVmfg/profile-displayphoto-shrink_800_800/B4DZPaF04bG0Ak-/0/1734530782886?e=1752710400&v=beta&t=mXWVHStHozfuaSX7x7Elob_5EJkB_r3MLq195dpP0vc',
    ],
    site: '@nishimweprince',
  },
  metadataBase: new URL('https://nishimweprince.dev'),
  alternates: {
    canonical: 'https://nishimweprince.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
