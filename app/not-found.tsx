import { LatestContent } from '@/components/latest-content';
import { Heading } from '@/lib/ui/heading';
import { Link } from '@/lib/ui/link';
import { Paragraph } from '@/lib/ui/paragraph';
import { getAllArticles } from '@/utils/get-all-articles';
import { getArticleData } from '@/utils/get-article-data';
import Image from 'next/image';
import NextLink from 'next/link';

export default async function NotFound() {
  const posts = await getAllArticles();

  return (
    <>
      <div className='mb-20'>
        <Heading level={1} className='text-8xl dark:text-8xl'>
          Ops!{' '}
        </Heading>
        <Paragraph>
          We couldn&apos;t find what you were looking for. Please try a
          different page
        </Paragraph>
        <Link href='/' underline>
          Return to home
        </Link>
      </div>

      <Heading level={2}>You may be looking for this:</Heading>
      <LatestContent />
    </>
  );
}
