'use client';

import { useContext } from 'react';
import { ThemeProviderContext } from './theme-provider';

export function PreferredThemeSwitch() {
  const { switchTheme } = useContext(ThemeProviderContext);

  return <button onClick={switchTheme}>Switch</button>;
}
