import type { Metadata } from 'next';
import { Open_Sans, Nunito, Oxygen_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { ThemeProvider } from '@/components/theme-provider';
import { PreferredThemeSwitch } from '@/components/preferred-theme-switch';
import Link from 'next/link';

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
        <main className='mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0'>
          <aside className='-ml-[8px] mb-16 tracking-tight'>
            <div className='lg:sticky lg:top-20'>
              <nav className='fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto'>
                <div className='flex min-w-full flex-row justify-between space-x-0'>
                  <Link
                    href='/'
                    className='flex align-middle text-neutral-500 transition-all hover:text-neutral-800 dark:hover:text-neutral-200'
                  >
                    <span className='relative px-2 py-1'>Blog</span>
                  </Link>
                  <ThemeProvider>
                    <PreferredThemeSwitch></PreferredThemeSwitch>
                  </ThemeProvider>
                </div>
              </nav>
            </div>
          </aside>

          <div className='flex flex-col md:flex-row'>{children}</div>
        </main>

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
      </body>
    </html>
  );
}
