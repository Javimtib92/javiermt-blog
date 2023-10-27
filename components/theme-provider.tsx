'use client';

import {
  ReactNode,
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

type ThemeType = 'light' | 'dark';

type ThemeProviderContext = {
  switchTheme: () => void;
};

const defaultValue = {
  switchTheme: () => {},
};

export const ThemeProviderContext =
  createContext<ThemeProviderContext>(defaultValue);

const useClientsideEffect =
  typeof window === 'undefined' ? () => {} : useLayoutEffect;

const DARK_QUERY = '(prefers-color-scheme: dark)';
const LIGHT_QUERY = '(prefers-color-scheme: light)';

const getPreferredColorScheme = (): 'dark' | 'light' | null => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia(DARK_QUERY).matches) {
      return 'dark';
    }
    if (window.matchMedia(LIGHT_QUERY).matches) {
      return 'light';
    }
  }
  return null;
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType | null>(() => {
    const preferredMode = getPreferredColorScheme();

    return preferredMode;
  });

  useClientsideEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const value = {
    switchTheme: () => {
      console.log('here');
      if (theme === 'dark') {
        setTheme('light');
        localStorage.theme = 'light';
      } else {
        setTheme('dark');
        localStorage.theme = 'dark';
      }
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
