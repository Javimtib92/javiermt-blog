import type { MDXComponents } from 'mdx/types';
import React from 'react';
import { cn } from './utils/cn';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => {
      return (
        <h1
          className='max-w-[650px] text-2xl font-bold tracking-tighter'
          {...props}
        ></h1>
      );
    },
    ul: ({ children, ...props }) => {
      return (
        <ul
          className='max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400'
          {...props}
        >
          {children}
        </ul>
      );
    },
    blockquote: ({ children, ...props }) => {
      return (
        <blockquote className='my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-[#282c34]'>
          {React.Children.map(children, (child) => {
            if (React.isValidElement<HTMLElement>(child)) {
              return React.cloneElement(child, {
                className: cn(
                  props.className,
                  'text-xl font-medium italic leading-relaxed text-gray-900 dark:text-white'
                ),
              });
            }
            return child;
          })}
        </blockquote>
      );
    },
  };
}
