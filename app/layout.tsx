import type { Metadata } from 'next';
import { Oxygen_Mono, Barlow_Condensed, Montserrat } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { SandpackCSS } from '@/components/sandpack-css';

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
  return (
    <html lang='en' translate='no'>
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

        <script
          id='accent-color-hsl-compute'
          dangerouslySetInnerHTML={{
            __html: `
            function hexToRgb(color) {
              const r = parseInt(color.substr(1, 2), 16);
              const g = parseInt(color.substr(3, 2), 16);
              const b = parseInt(color.substr(5, 2), 16);
            
              return [r, g, b];
            }

            function rgbToHsl(r, g, b) {
              r /= 255;
              g /= 255;
              b /= 255;
              const l = Math.max(r, g, b);
              const s = l - Math.min(r, g, b);
              const h = s
                ? l === r
                  ? (g - b) / s
                  : l === g
                  ? 2 + (b - r) / s
                  : 4 + (r - g) / s
                : 0;
              return [
                60 * h < 0 ? 60 * h + 360 : 60 * h,
                100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
                (100 * (2 * l - s)) / 2,
              ];
            }
            
            
            (function() {
              const colo = hexToRgb(
                getComputedStyle(document.documentElement).getPropertyValue(
                  '--color-accent-base'
                )
              );
          
              const [h,s,l] = rgbToHsl(...colo);
              
              document.documentElement.style.setProperty('--accent-hue', h);
              document.documentElement.style.setProperty('--accent-saturation', s);
              document.documentElement.style.setProperty('--accent-lightness', l);
            })();
            `,
          }}
        ></script>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
