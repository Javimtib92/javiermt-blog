import { getArticleData } from '@/utils/get-article-data';
import { getLatestContent } from '@/utils/get-latest-content';
import Image from 'next/image';
import NextLink from 'next/link';

export async function LatestContent({
  maxOutputCount,
}: {
  maxOutputCount?: number;
}) {
  const posts = await getLatestContent(maxOutputCount);

  return (
    <div className='my-4'>
      {posts.map((post) => {
        const data = getArticleData(post.slug, post.category);

        if (!data) {
          return null;
        }

        const { frontMatter } = data;

        return (
          <NextLink
            key={post.slug}
            href={`/blog/${post.category}/${post.slug}`}
            className='my-8 flex cursor-pointer flex-row items-center gap-4 bg-primary-50 p-4 hover:bg-primary-100 dark:bg-background-600 hover:dark:bg-background-500'
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
  );
}
