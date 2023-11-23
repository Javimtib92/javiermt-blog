import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './mdx-components.tsx',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      display: ['var(--font-display)', ...fontFamily.sans],
      body: ['var(--font-body)', ...fontFamily.serif],
      mono: ['var(--font-mono)', ...fontFamily.mono],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: {
          50: 'color-mix(in srgb, var(--color-background-base) 5%, white)',
          100: 'color-mix(in srgb, var(--color-background-base) 10%, white)',
          200: 'color-mix(in srgb, var(--color-background-base) 30%, white)',
          300: 'color-mix(in srgb, var(--color-background-base) 50%, white)',
          400: 'color-mix(in srgb, var(--color-background-base) 70%, white)',
          500: 'var(--color-background-base)',
          600: 'color-mix(in srgb, var(--color-background-base), black 10%)',
          700: 'color-mix(in srgb, var(--color-background-base), black 30%)',
          800: 'color-mix(in srgb, var(--color-background-base), black 50%)',
          900: 'color-mix(in srgb, var(--color-background-base), black 70%)',
        },
        primary: {
          50: 'color-mix(in srgb, var(--color-primary-base) 5%, white)',
          100: 'color-mix(in srgb, var(--color-primary-base) 10%, white)',
          200: 'color-mix(in srgb, var(--color-primary-base) 30%, white)',
          300: 'color-mix(in srgb, var(--color-primary-base) 50%, white)',
          400: 'color-mix(in srgb, var(--color-primary-base) 70%, white)',
          500: 'var(--color-primary-base)',
          600: 'color-mix(in srgb, var(--color-primary-base), black 10%)',
          700: 'color-mix(in srgb, var(--color-primary-base), black 30%)',
          800: 'color-mix(in srgb, var(--color-primary-base), black 50%)',
          900: 'color-mix(in srgb, var(--color-primary-base), black 70%)',
        },
        secondary: {
          50: 'color-mix(in srgb, var(--color-secondary-base) 5%, white)',
          100: 'color-mix(in srgb, var(--color-secondary-base) 10%, white)',
          200: 'color-mix(in srgb, var(--color-secondary-base) 30%, white)',
          300: 'color-mix(in srgb, var(--color-secondary-base) 50%, white)',
          400: 'color-mix(in srgb, var(--color-secondary-base) 70%, white)',
          500: 'var(--color-secondary-base)',
          600: 'color-mix(in srgb, var(--color-secondary-base), black 10%)',
          700: 'color-mix(in srgb, var(--color-secondary-base), black 30%)',
          800: 'color-mix(in srgb, var(--color-secondary-base), black 50%)',
          900: 'color-mix(in srgb, var(--color-secondary-base), black 70%)',
        },
        accent: {
          50: 'color-mix(in srgb, var(--color-accent-base) 5%, white)',
          100: 'color-mix(in srgb, var(--color-accent-base) 10%, white)',
          200: 'color-mix(in srgb, var(--color-accent-base) 30%, white)',
          300: 'color-mix(in srgb, var(--color-accent-base) 50%, white)',
          400: 'color-mix(in srgb, var(--color-accent-base) 70%, white)',
          500: 'var(--color-accent-base)',
          600: 'color-mix(in srgb, var(--color-accent-base), black 10%)',
          700: 'color-mix(in srgb, var(--color-accent-base), black 30%)',
          800: 'color-mix(in srgb, var(--color-accent-base), black 50%)',
          900: 'color-mix(in srgb, var(--color-accent-base), black 70%)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
