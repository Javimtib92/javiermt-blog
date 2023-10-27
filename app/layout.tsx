import type { Metadata } from 'next';
import {
  Oswald,
  Source_Serif_4,
  Fjalla_One,
  Libre_Baskerville,
  Karla,
  Merriweather,
  Source_Sans_3,
  Quattrocento,
  Lora,
  Quattrocento_Sans,
  Playfair_Display,
  Raleway,
  Open_Sans,
  Space_Mono,
  Nunito,
  Oxygen_Mono,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { ThemeProvider } from '@/components/theme-provider';
import { PreferredThemeSwitch } from '@/components/preferred-theme-switch';
import Script from 'next/script';

// const sansSerif = Oswald({ subsets: ['latin'], variable: '--font-sans-serif' });
// const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' });

// const sansSerif = Fjalla_One({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-sans-serif',
// }); // Title font
// const serif = Libre_Baskerville({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-serif',
// }); // Paragraph font

// const sansSerif = Karla({ subsets: ['latin'], variable: '--font-sans-serif' });
// const serif = Merriweather({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-serif',
// });

// const sansSerif = Libre_Baskerville({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-sans-serif',
// });
// const serif = Source_Sans_3({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-serif',
// });

const display = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
});
const body = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

const mono = Oxygen_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Javier Muñoz Tous',
  description:
    "Explore a diverse range of topics, including technology, development, and personal insights on my blog. Join the online community and engage in discussions with me on subjects I'm passionate about.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'mx-4 mb-40 mt-8 flex max-w-3xl flex-col bg-white text-black antialiased dark:bg-[#111010] dark:text-white md:flex-row lg:mx-auto',
          display.variable,
          body.variable,
          mono.variable
        )}
      >
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
        <div>
          <ThemeProvider>
            <PreferredThemeSwitch></PreferredThemeSwitch>
          </ThemeProvider>
        </div>
        {children}
      </body>
    </html>
  );
}
