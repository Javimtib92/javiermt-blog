import { cn } from '@/utils/cn';
import { default as NextLink } from 'next/link';
import type { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export function Link({
  underline = false,
  className,
  children,
  ...props
}: {
  underline?: boolean;
  className?: string;
  children?: ReactNode;
} & LinkProps) {
  return (
    <NextLink
      className={cn(
        'text-md font-body text-accent-500 hover:text-accent-400 dark:text-accent-400 dark:hover:text-accent-300',
        underline ? 'underline underline-offset-4' : 'no-underline',
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
