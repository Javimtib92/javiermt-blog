import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

export function Quote({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <blockquote
      className='my-4 border-l-4 border-accent-secondary-200 bg-primary-50 p-4 dark:border-accent-secondary-700 dark:bg-background-600'
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<HTMLElement>(child)) {
          return React.createElement('p', {
            ...child.props,
            className: cn(
              className,
              'text-lg font-medium italic leading-relaxed text-black dark:text-white',
              index !== 1 ? 'mt-8' : ''
            ),
          });
        }
        return child;
      })}
    </blockquote>
  );
}
