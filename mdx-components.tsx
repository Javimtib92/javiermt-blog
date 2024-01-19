import type { MDXComponents } from 'mdx/types';
import React from 'react';
import { Paragraph } from './lib/ui/paragraph';
import NextLink from 'next/link';
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
    a: ({ href, ...props }) => {
      if (
        typeof props.children === 'string' &&
        props.children?.startsWith('#unstyled')
      ) {
        return (
          <NextLink href={href ?? ''} {...props}>
            {props.children.replace('#unstyled', '').trim()}
          </NextLink>
        );
      }
      return <Link href={href ?? ''} underline {...props} />;
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
    ol: ({ children, ...props }) => {
      return (
        <ol
          className='list-inside list-decimal space-y-1 border-y-[1px] border-background-50 py-4 dark:border-background-500'
          {...props}
        >
          {children}
        </ol>
      );
    },
    li: ({ children }) => {
      const textChildren: { children: string } | undefined = (
        (children as []) || []
      ).find((el: any) => el.props);
      const text = textChildren
        ? (textChildren as { props: { children: string } }).props.children
        : '';

      return (
        <li className=' text-primary-800 marker:text-accent-600 dark:text-primary-200 dark:marker:text-accent-400'>
          {text}
        </li>
      );
    },
    blockquote: (props) => <Quote {...props} />,
  };
}
