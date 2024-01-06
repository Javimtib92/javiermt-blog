import type { Metadata } from 'next';
import { Oxygen_Mono, Barlow_Condensed, Montserrat } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './navbar';

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

const title = 'Blog | Javier Muñoz Tous';
const description =
  "Explore a diverse range of topics, including technology, development, and personal insights on my blog. Join the online community and engage in discussions with me on subjects I'm passionate about.";
const image = 'https://coding-kittens.com/logo.png';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: image,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' translate='no'>
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

        <footer>
          {/* <div className='h-48 w-full bg-background-600'>Subscribe</div> */}
        </footer>

        <script
          id='noThemeFlash'
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              window.__onThemeChange = function() {};
              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                document.documentElement.classList.add(newTheme);

                if (newTheme === 'dark') {
                  document.getElementById('moon-icon').classList.replace('hidden', 'block');
                } else if (newTheme === 'light') {
                  document.getElementById('sun-icon').classList.replace('hidden', 'block');
                }
                window.__onThemeChange(newTheme);
              }

              let preferredTheme;
              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) { }

              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }

              const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
              darkQuery.addListener(function(e) {
                window.__setPreferredTheme(e.matches ? 'dark' : 'light')
              });

              setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
            })();
          `,
          }}
        ></script>

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
                  '--color-accent-secondary-base'
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
