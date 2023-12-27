import type { MDXComponents } from 'mdx/types';
import React from 'react';
import { Heading } from './lib/ui/heading';
import { Paragraph } from './lib/ui/paragraph';
import { Link } from './lib/ui/link';
import { Quote } from './lib/ui/quote';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => {
      return <Heading {...props}></Heading>;
    },
    h2: (props) => {
      return <Heading level={2} {...props}></Heading>;
    },
    p: (props) => {
      return <Paragraph {...props}></Paragraph>;
    },
    a: ({ href, ...props }) => {
      return <Link href={href ?? ''} underline {...props}></Link>;
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
    blockquote: (props) => {
      return <Quote {...props} />;
    },
  };
}
