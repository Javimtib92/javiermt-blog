import type { MDXComponents } from 'mdx/types';
import React from 'react';
import { cn } from './utils/cn';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => {
      return (
        <h1
          className='font-display text-2xl font-bold text-primary-900 dark:text-primary-100'
          {...props}
        ></h1>
      );
    },
    h2: (props) => {
      return (
        <h1
          className='font-display text-xl font-bold text-primary-900 dark:text-primary-100'
          {...props}
        ></h1>
      );
    },
    p: (props) => {
      return (
        <p
          className='text-md mb-8 mt-8 font-body text-secondary-700 dark:text-secondary-300'
          {...props}
        ></p>
      );
    },
    a: (props) => {
      return (
        <a
          className='text-md font-body text-accent-400 underline underline-offset-4'
          {...props}
        ></a>
      );
    },
    ul: ({ children, ...props }) => {
      return (
        <ul
          className='max-w-md list-inside list-disc space-y-1 text-primary-400 dark:text-primary-400'
          {...props}
        >
          {children}
        </ul>
      );
    },
    blockquote: ({ children, ...props }) => {
      return (
        <blockquote className='my-4 border-l-4 border-accent-300 bg-background-50 p-4 dark:border-accent-500 dark:bg-background-700'>
          {React.Children.map(children, (child) => {
            if (React.isValidElement<HTMLElement>(child)) {
              return React.cloneElement(child, {
                className: cn(
                  props.className,
                  'text-xl font-medium italic leading-relaxed text-primary-900 dark:text-primary-100'
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
