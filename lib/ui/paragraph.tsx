import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

export function Paragraph({
  subtle = false,
  mono = false,
  children,
  className,
  ...props
}: {
  mono?: boolean;
  subtle?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'mb-6 mt-6',
        mono ? 'font-mono' : 'font-body',
        subtle
          ? 'text-xs text-primary-700 dark:text-primary-400'
          : 'text-md text-primary-800 dark:text-primary-200',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
