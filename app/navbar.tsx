import { ThemeProvider } from '@/components/theme-provider';
import NavigationLinks from './navigation-links';
import { SiteLogo } from './site-logo';
import PreferredThemeSwitch from '@/components/preferred-theme-switch';

export function Navbar() {
  return (
    <nav className='sticky top-0 mb-12 mt-4 flex flex-row items-start py-4 pl-2 pr-4 backdrop-blur md:-ml-[8px] md:px-0'>
      <div className='flex min-w-full flex-row justify-between space-x-0'>
        <SiteLogo />

        <div className='flex gap-6'>
          <NavigationLinks />
          <ThemeProvider>
            <PreferredThemeSwitch></PreferredThemeSwitch>
          </ThemeProvider>
        </div>
      </div>
    </nav>
  );
}
