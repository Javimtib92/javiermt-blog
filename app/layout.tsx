import type { Metadata } from 'next';
import { Oxygen_Mono, Barlow_Condensed, Montserrat } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { SandpackCSS } from '@/components/sandpack-css';
import { getAccentBaseValue } from '@/utils/get-accent-base-value';
import { hexToRgb, rgbToHsl } from '@/utils/colors';

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
});
const body = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

const mono = Oxygen_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
});

const title = 'Coding Kittens - Javier Muñoz Tous Blog';
const description =
  'Explore a diverse range of topics, including technology, development, and personal insights on my blog. From CSS, JavaScript and HTML to AI and ML.';
const logo = 'https://coding-kittens.com/logo.png';

export const metadata: Metadata = {
  metadataBase: new URL('https://coding-kittens.com'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://coding-kittens.com',
    siteName: 'Coding Kittens',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: logo,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [logo],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accentColorBaseValue = getAccentBaseValue();

  const color = hexToRgb(accentColorBaseValue || '#000000');

  //@ts-expect-error
  const [h] = rgbToHsl(...color);

  return (
    <html
      lang='en'
      translate='no'
      style={{
        //@ts-expect-error
        '--accent-hue': h,
      }}
    >
      <head>
        <SandpackCSS />
      </head>
      <body
        className={cn(
          'bg-white text-black antialiased transition-colors dark:bg-background-700 dark:text-white ',
          display.variable,
          body.variable,
          mono.variable
        )}
      >
        <div className='mb-40 max-w-3xl md:mx-auto'>
          <main className='flex min-w-0 flex-auto flex-col px-2 md:px-0'>
            <Navbar />
            <div className='mx-4 md:mx-0'>{children}</div>
          </main>
        </div>

        <Footer />

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
