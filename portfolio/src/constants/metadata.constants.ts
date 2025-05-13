import { Metadata } from 'next';

export const metadataConstants: Metadata = {
  title: 'Nishimwe Prince | Portfolio & Resume',
  icons: {
    icon: '/np-icon.svg',
  },
  description:
    'Explore the professional portfolio and resume of Nishimwe Prince, a creative visionary with 10+ years of experience in marketing, design, and project leadership. View work experience, achievements, projects, and contact details.',
  keywords: [
    'Nishimwe Prince',
    'Portfolio',
    'Resume',
    'Senior Producer',
    'Marketing',
    'Project Management',
    'Creative Director',
    'UI/UX Design',
    'Frontend Developer',
    'New York',
    'Remote Work',
    'Professional Experience',
    'Contact',
    'About Nishimwe Prince',
    'Work Portfolio',
    'Leadership',
    'Web Design',
    'JavaScript',
    'TypeScript',
    'Tech Enthusiast',
    'Digital Marketing',
    'SEO',
    'Innovation',
  ],
  authors: [{ name: 'Nishimwe Prince', url: 'https://nishimweprince.dev' }],
  creator: 'Nishimwe Prince',
  metadataBase: new URL('https://nishimweprince.dev'),
  openGraph: {
    title: 'Nishimwe Prince | Portfolio & Resume',
    description:
      "Discover the innovative work and career journey of Nishimwe Prince, a leading professional in web and AI agents' development.",
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
      "Discover the innovative work and career journey of Nishimwe Prince, a leading professional in web and AI agents' development.",
    creator: '@nishimweprince',
    images: [
      'https://media.licdn.com/dms/image/v2/D4D03AQEutrb6cPVmfg/profile-displayphoto-shrink_800_800/B4DZPaF04bG0Ak-/0/1734530782886?e=1752710400&v=beta&t=mXWVHStHozfuaSX7x7Elob_5EJkB_r3MLq195dpP0vc',
    ],
    site: '@nishimweprince',
  },
  alternates: {
    canonical: 'https://nishimweprince.dev',
    languages: {
      'en-US': 'https://nishimweprince.dev/en',
    },
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: 'Nishimwe Prince Portfolio',
    statusBarStyle: 'black-translucent',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
  },
  archives: 'https://nishimweprince.dev/archives',
  assets: 'https://nishimweprince.dev/assets',
  pagination: {
    previous: 'https://nishimweprince.dev/previous',
    next: 'https://nishimweprince.dev/next',
  },
};
