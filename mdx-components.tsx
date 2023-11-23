import type { MDXComponents } from 'mdx/types';
import React from 'react';
import { cn } from './utils/cn';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => {
      return (
        <h1
          className='dark:text-primary-100 text-primary-900 font-display text-2xl font-bold'
          {...props}
        ></h1>
      );
    },
    h2: (props) => {
      return (
        <h1
          className='dark:text-primary-100 text-primary-900 font-display text-xl font-bold'
          {...props}
        ></h1>
      );
    },
    p: (props) => {
      return (
        <p
          className='text-md dark:text-secondary-300 text-secondary-700 mb-8 mt-8 font-body'
          {...props}
        ></p>
      );
    },
    a: (props) => {
      return (
        <a
          className='text-md text-accent-400 font-body underline'
          {...props}
        ></a>
      );
    },
    ul: ({ children, ...props }) => {
      return (
        <ul
          className='text-primary-400 dark:text-primary-400 max-w-md list-inside list-disc space-y-1'
          {...props}
        >
          {children}
        </ul>
      );
    },
    blockquote: ({ children, ...props }) => {
      return (
        <blockquote className='dark:border-accent-500 dark:bg-background-700 bg-background-50 border-accent-300 my-4 border-l-4 p-4'>
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
