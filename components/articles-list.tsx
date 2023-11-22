import { formatDate } from '@/utils/dates';
import {
  QueryAllArticlesOptions,
  getAllArticles,
} from '@/utils/get-all-articles';
import { getArticleData } from '@/utils/get-article-data';

import Image from 'next/image';
import Link from 'next/link';

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
        className='mr-6 block flex-[0_0_100px] max-sm:hidden sm:flex-[0_0_180px] lg:flex-[0_0_240px]'
      >
        <Image
          src={articleData.thumbnail}
          width={300}
          height={300}
          alt={`${article.slug} image thumbnail`}
          className='h-[100px] w-[100px] sm:h-[180px] sm:w-[180px] lg:h-[240px] lg:w-[240px]'
          priority
        ></Image>
      </Link>
      <div className='relative flex flex-col justify-between max-lg:flex-1'>
        <header>
          <div className='flex flex-row items-center justify-between'>
            <h3 className='mb-2 ml-0 mr-10 mt-2 font-mono text-sm italic leading-5 text-slate-800 dark:text-slate-200'>
              {articleData.subtitle}
            </h3>
            <div className='mb-2 mt-2'>
              <a
                className='font-mono text-sm font-extrabold text-yellow-600 dark:text-yellow-300'
                href={`/blog/${article.category}`}
              >
                {article.category}
              </a>
            </div>
          </div>

          <h2>
            <Link
              href={article.path}
              className='font-display text-[26px] font-bold leading-7'
            >
              {articleData.title}
            </Link>
          </h2>
        </header>
        <div className='leading-6 max-sm:hidden'>
          {articleData.shortDescription}
        </div>
        <footer className='mt-4 flex justify-between font-mono text-xs uppercase text-neutral-600 dark:text-neutral-400 '>
          <div className='font-mono text-xs'>
            {formatDate(articleData.createdAt)}
          </div>
          <div className='font-mono text-xs'>{readingTime.text}</div>
        </footer>
      </div>
    </article>
  );
}

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
