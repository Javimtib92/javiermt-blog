import type { Metadata } from 'next';
import { Open_Sans, Nunito, Oxygen_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { ThemeProvider } from '@/components/theme-provider';
import { PreferredThemeSwitch } from '@/components/preferred-theme-switch';

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
          'mx-4 mb-40 mt-8 max-w-3xl bg-white text-black antialiased dark:bg-[#111010] dark:text-white lg:mx-auto',
          display.variable,
          body.variable,
          mono.variable
        )}
      >
        <div className='float-right mx-auto my-0 max-w-7xl'>
          <ThemeProvider>
            <PreferredThemeSwitch></PreferredThemeSwitch>
          </ThemeProvider>
        </div>

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
        <div className='flex flex-col md:flex-row'>{children}</div>
      </body>
    </html>
  );
}
