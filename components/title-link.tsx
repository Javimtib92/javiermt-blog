import { Heading, HeadingLevel } from '@/lib/ui/heading';
import { ReactNode } from 'react';
import { LinkIcon } from '@heroicons/react/24/solid';

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

export function TitleLink({
  children,
  level,
}: {
  children?: ReactNode;
  level?: HeadingLevel;
}) {
  let slug = slugify(children as string);

  return (
    <Heading
      id={slug}
      level={level}
      className='title-link hover:text-accent-500 dark:hover:text-accent-300  md:inline-flex md:flex-row md:items-center'
      data-anchor
    >
      <a key={`link-${slug}`} href={`#${slug}`}>
        {children}
      </a>
      <LinkIcon className='anchor -mr-2 inline-block h-[28px] w-[28px] cursor-pointer pl-2 no-underline after:text-accent-400 md:invisible' />
    </Heading>
  );
}
