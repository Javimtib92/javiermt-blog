import { ThemeProvider } from '@/components/theme-provider';
import NavigationLinks from './navigation-links';
import { SiteLogo } from './site-logo';
import PreferredThemeSwitch from '@/components/preferred-theme-switch';
import { NavbarShrink } from './navbar-shrink';

export function Navbar() {
  return (
    <nav className='navbar sticky top-0 mb-12 mt-4 flex flex-row items-start py-4 pl-2 pr-4 md:-mx-[28px] md:px-5'>
      <div className='backdrop absolute top-0 h-20 min-w-full backdrop-blur md:-mx-[28px]'></div>
      <div className='img-container z-10 flex min-w-full flex-row justify-between space-x-0'>
        <SiteLogo />

        <div className='flex gap-6'>
          <NavigationLinks />
          <NavbarShrink>
            <ThemeProvider>
              <PreferredThemeSwitch></PreferredThemeSwitch>
            </ThemeProvider>
          </NavbarShrink>
        </div>
      </div>
    </nav>
  );
}
