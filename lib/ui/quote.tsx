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
      className='my-4 border-l-4 border-accent-300 bg-white p-4 dark:border-accent-700 dark:bg-background-700'
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
