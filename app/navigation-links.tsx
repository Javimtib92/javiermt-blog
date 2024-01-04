'use client';

import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import Logo from '/public/logo.png';

export default function NavigationLinks() {
  const segments = useSelectedLayoutSegments();

  const activeClass =
    'dark:text-white text-neutral-900 underline underline-offset-8';
  const inactiveClass =
    'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200';

  return (
    <div className='flex flex-row items-center'>
      <Image
        alt='website logo'
        src={Logo}
        width={48}
        height={48}
        className='mr-4'
      />
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
  );
}
