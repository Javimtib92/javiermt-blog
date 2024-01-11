'use client';

import { useDisplayMobileNavigation } from '@/providers/navbar-provider';
import { cn } from '@/utils/cn';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const ResizeWatcher = ({ children }: { children: ReactNode }) => {
  const { displayMobileNavigation, setDisplayMobileNavigation } =
    useDisplayMobileNavigation();

  useEffect(() => {
    const onResize = () => {
      if (!displayMobileNavigation) {
        return;
      }

      const viewportWidth = window.innerWidth;
      const mobileBreakpoint = 640;

      if (viewportWidth > mobileBreakpoint) {
        setDisplayMobileNavigation(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      return window.removeEventListener('resize', onResize);
    };
  }, [displayMobileNavigation, setDisplayMobileNavigation]);

  return children;
};

export function MobileNavMenu() {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  const { displayMobileNavigation, setDisplayMobileNavigation } =
    useDisplayMobileNavigation();

  useEffect(() => {
    setDisplayMobileNavigation(false);
  }, [pathname, setDisplayMobileNavigation]);

  useEffect(() => {
    if (displayMobileNavigation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [displayMobileNavigation]);

  if (!displayMobileNavigation) {
    return null;
  }

  const activeClass =
    'dark:text-white text-neutral-900 underline underline-offset-8';
  const inactiveClass =
    'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200';

  return (
    <ResizeWatcher>
      <div
        className='fixed top-0 z-40 -mx-4 h-dvh w-dvw backdrop-blur'
        onClick={() => setDisplayMobileNavigation(false)}
      >
        <div
          className='h-64 bg-white dark:bg-background-700'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex flex-row-reverse pr-6 pt-6'>
            <button
              className='-m-4 p-4'
              onClick={() => setDisplayMobileNavigation(false)}
            >
              <XMarkIcon className='h-6 w-6' />
            </button>
          </div>
          <div className='flex flex-col gap-y-8 p-6'>
            <Link
              href='/'
              className={cn(
                segments.length === 0 ? activeClass : inactiveClass,
                'flex align-middle transition-all'
              )}
            >
              <span className='relative px-2 py-1'>Me</span>
            </Link>
            <Link
              href='/blog'
              className={cn(
                segments.includes('blog') ? activeClass : inactiveClass,
                'flex align-middle transition-all'
              )}
            >
              <span className='relative px-2 py-1'>Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </ResizeWatcher>
  );
}
