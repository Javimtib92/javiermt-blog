import type { MDXComponents } from 'mdx/types';

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
  };
}
