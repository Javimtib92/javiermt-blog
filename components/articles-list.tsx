import { Heading } from '@/lib/ui/heading';
import { Link } from '@/lib/ui/link';
import { Paragraph } from '@/lib/ui/paragraph';
import { formatDate } from '@/utils/dates';
import {
  QueryAllArticlesOptions,
  getAllArticles,
} from '@/utils/get-all-articles';
import { getArticleData } from '@/utils/get-article-data';

import Image from 'next/image';

export async function ArticlesList({
  query,
}: {
  query?: QueryAllArticlesOptions;
}) {
  const articles = getAllArticles(query);

  return (
    <div className='mx-auto my-0 flex max-w-7xl flex-wrap justify-between pb-0 '>
      <main className='flex-1 pb-14 lg:flex-[0_0_770px]'>
        <div className='divide-y divide-gray-200 dark:divide-gray-700'>
          {articles.map((article) => {
            return <ArticleItem key={article.slug} article={article} />;
          })}
        </div>
      </main>
    </div>
  );
}

async function ArticleItem({
  article,
}: {
  article: {
    slug: string;
    path: string;
    category: string;
  };
}) {
  const { frontMatter: articleData, readingTime } = await getArticleData(
    article.slug,
    article.category
  );

  if (process.env.NODE_ENV === 'production' && articleData.draft) {
    return null;
  }

  return (
    <article className='flex px-0 py-7'>
      <Link
        href={article.path}
        className='mr-6 block flex-[0_0_100px] max-md:hidden md:flex-[0_0_280px]'
      >
        <Image
          src={articleData.thumbnail}
          width={300}
          height={300}
          alt={`${article.slug} image thumbnail`}
          className='h-[280px] w-[280px]'
          priority
        ></Image>
      </Link>
      <div className='relative flex flex-col justify-between max-lg:flex-1'>
        <header>
          <div className='flex flex-row items-center justify-between'>
            <Heading
              level={3}
              className='mb-2 ml-0 mr-10 mt-2 font-mono text-sm font-bold italic leading-5 text-accent-secondary-400 dark:text-accent-secondary-400 sm:text-sm'
            >
              {articleData.subtitle}
            </Heading>
            <div className='mb-4 mt-2'>
              <Link
                className='font-mono text-sm font-extrabold underline-offset-8'
                underline
                href={`/blog/${article.category}`}
              >
                {article.category}
              </Link>
            </div>
          </div>

          <Heading level={2} className='mb-4'>
            <Link
              href={article.path}
              className='font-display text-4xl font-bold leading-7 text-primary-900 hover:text-primary-900 dark:text-primary-100 dark:hover:text-primary-100'
            >
              {articleData.title}
            </Link>
          </Heading>
        </header>
        <Paragraph className='mb-0 mt-0 leading-6 max-sm:hidden'>
          {articleData.shortDescription}
        </Paragraph>
        <footer className='mt-4 flex justify-between'>
          <Paragraph className='m-0' subtle mono>
            {formatDate(articleData.createdAt)}
          </Paragraph>
          <Paragraph className='m-0' subtle mono>
            {readingTime.text}
          </Paragraph>
        </footer>
      </div>
    </article>
  );
}
