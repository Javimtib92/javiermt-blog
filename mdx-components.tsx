import type { MDXComponents } from 'mdx/types';
import React from 'react';
import { Paragraph } from './lib/ui/paragraph';
import { Link } from './lib/ui/link';
import { Quote } from './lib/ui/quote';
import { TitleLink } from './components/title-link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <TitleLink level={1} {...props} />,
    h2: (props) => <TitleLink level={2} {...props} />,
    h3: (props) => <TitleLink level={3} {...props} />,
    p: (props) => <Paragraph {...props} />,
    a: ({ href, ...props }) => <Link href={href ?? ''} underline {...props} />,
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
    blockquote: (props) => <Quote {...props} />,
  };
}
