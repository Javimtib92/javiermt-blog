'use client';

import { ReactNode, useEffect } from 'react';

export function NavbarShrink({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!CSS.supports('animation-timeline: scroll()')) {
      const navbar = document.querySelector('.navbar') as HTMLElement;
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
  }, []);

  return children;
}
