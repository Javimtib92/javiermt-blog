'use client';

import { useContext, useEffect, useRef } from 'react';
import { ThemeProviderContext } from './theme-provider';
import { SunIcon } from '@heroicons/react/24/solid';
import { MoonIcon } from '@heroicons/react/24/solid';

export function PreferredThemeSwitch() {
  const sunIconRef = useRef<SVGSVGElement | null>(null);
  const moonIconRef = useRef<SVGSVGElement | null>(null);

  const { theme, switchTheme } = useContext(ThemeProviderContext);

  useEffect(() => {
    if (theme === 'dark') {
      sunIconRef.current?.classList.replace('block', 'hidden');
      moonIconRef.current?.classList.replace('hidden', 'block');
    } else if (theme === 'light') {
      moonIconRef.current?.classList.replace('block', 'hidden');
      sunIconRef.current?.classList.replace('hidden', 'block');
    }
  }, [theme]);

  return (
    <button
      aria-label='Switch theme button'
      onClick={switchTheme}
      className='-mx-4 -my-2 px-4 py-2'
    >
      <MoonIcon ref={moonIconRef} id='moon-icon' className='hidden h-6 w-6' />
      <SunIcon ref={sunIconRef} id='sun-icon' className='hidden h-6 w-6' />
    </button>
  );
}

export default PreferredThemeSwitch;
