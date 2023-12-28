import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

export type HeadingLevel = 1 | 2 | 3;

export function Heading({
  children,
  level = 1,
  className,
  ...props
}: {
  children?: ReactNode;
  level?: HeadingLevel;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>) {
  switch (level) {
    case 1:
      return (
        <h1
          className={cn(
            'font-display text-3xl font-bold text-primary-800 dark:text-primary-100',
            className
          )}
          {...props}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={cn(
            'font-display text-2xl font-bold text-primary-800 dark:text-primary-100',
            className
          )}
          {...props}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={cn(
            'font-display text-xl font-bold text-primary-800 dark:text-primary-100',
            className
          )}
          {...props}
        >
          {children}
        </h3>
      );
  }
}
