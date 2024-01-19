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
      <div className='my-4'>
        {posts.map(async (post) => {
          const data = getArticleData(post.slug, post.category);

          if (!data) {
            return null;
          }

          const { frontMatter } = data;

          return (
            <NextLink
              key={post.slug}
              href={`/blog/${post.category}/${post.slug}`}
              className='my-8 flex cursor-pointer flex-row items-center gap-4 bg-background-600 p-4 hover:bg-background-500'
            >
              <Image
                src={frontMatter.thumbnail}
                alt='post thumbnail'
                width={50}
                height={50}
              />
              <div className='sm:text-md max-w-56 text-xs sm:max-w-full'>
                {frontMatter.title}
              </div>
            </NextLink>
          );
        })}
      </div>
    </>
  );
}
