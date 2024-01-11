'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useDisplayMobileNavigation } from '@/providers/navbar-provider';

export default function NavigationLinks() {
  const segments = useSelectedLayoutSegments();
  const { setDisplayMobileNavigation } = useDisplayMobileNavigation();

  const activeClass =
    'dark:text-white text-neutral-900 underline underline-offset-8';
  const inactiveClass =
    'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200';

  return (
    <>
      <div className='hidden flex-row items-center sm:flex'>
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
      <div className='flex sm:hidden'>
        <button
          aria-label='Mobile nav menu button'
          className='-mx-4 -my-2 px-4 py-2'
          onClick={() => setDisplayMobileNavigation(true)}
        >
          <Bars3Icon className='h-6 w-6'></Bars3Icon>
        </button>
      </div>
    </>
  );
}
