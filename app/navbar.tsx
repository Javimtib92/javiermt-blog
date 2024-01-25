import { ThemeProvider } from '@/providers/theme-provider';
import NavigationLinks from './navigation-links';
import { SiteLogo } from './site-logo';
import PreferredThemeSwitch from '@/components/preferred-theme-switch';

import { NavbarProvider } from '@/providers/navbar-provider';
import { MobileNavMenu } from '@/components/mobile-nav-menu';

export function Navbar() {
  return (
    <NavbarProvider>
      <nav className='navbar sticky top-0 z-10 mb-12 mt-20 flex flex-row items-start py-4 pl-2 pr-4 md:-mx-[28px] md:px-5'>
        <MobileNavMenu></MobileNavMenu>

        <div className='backdrop absolute left-[-8px] right-[-8px] top-0 h-20 min-w-full backdrop-blur md:-mx-[28px]'></div>

        <div className='img-container z-10 flex min-w-full flex-row justify-between space-x-0'>
          <SiteLogo />

          <div className='flex flex-row-reverse gap-6 sm:flex-row'>
            <NavigationLinks />
            <ThemeProvider>
              <PreferredThemeSwitch></PreferredThemeSwitch>
            </ThemeProvider>
          </div>
        </div>
      </nav>
      <script
        id='navbar-shrink-animation'
        dangerouslySetInnerHTML={{
          __html: `(function() {
            const navbar = document.querySelector(".navbar");
            
            if (!CSS.supports('animation-timeline: scroll()')) {
              const threshold = 500; // Adjust this threshold as needed
        
              window.addEventListener('scroll', handleScroll);
        
              function handleScroll() {
                if (!navbar) {
                  return;
                }
        
                const scrollY = window.scrollY || window.pageYOffset;
        
                if (scrollY > threshold) {
                  navbar.style.setProperty('--navbar-shrink', '1');
                } else {
                  navbar.style.setProperty('--navbar-shrink', '0');
                }
              }
            }
          })()`,
        }}
      ></script>
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
    </NavbarProvider>
  );
}
