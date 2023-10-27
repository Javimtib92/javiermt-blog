import { getAllArticles } from '@/utils/get-all-articles';
import { getArticleData } from '@/utils/get-article-data';
import Image from 'next/image';
import Link from 'next/link';

async function ArticleItem({
  article,
}: {
  article: {
    slug: string;
    path: string;
  };
}) {
  const { frontMatter: articleData, readingTime } = await getArticleData(
    article.slug
  );

  return (
    <article className='flex px-0 py-7'>
      <Link
        href={article.path}
        className='mr-6 block flex-[0_0_100px] sm:flex-[0_0_180px] lg:flex-[0_0_240px]'
      >
        <Image
          src={articleData.thumbnail}
          width={300}
          height={300}
          alt={`${article.slug} image thumbnail`}
          className='h-[100px] w-[100px] sm:h-[180px] sm:w-[180px] lg:h-[240px] lg:w-[240px]'
        ></Image>
      </Link>
      <div className='relative flex flex-col justify-between max-lg:flex-1'>
        <header>
          <h3 className='mb-2 ml-0 mr-10 mt-2 italic leading-5'>
            {articleData.subtitle}
          </h3>

          <h2 className='font-display w-[90%] text-[26px] leading-7'>
            {articleData.title}
          </h2>
        </header>
        <div className='max-w-[80%] leading-6 max-sm:hidden'>
          {articleData.shortDescription}
        </div>
        <footer className='flex justify-between text-sm uppercase text-gray-200 max-sm:hidden'>
          <div>26 de junio de 2015</div>
          <div className='text-xs'>Reading time: {readingTime.text}</div>
        </footer>
      </div>
    </article>
  );
}

export async function ArticlesList() {
  const articles = await getAllArticles();

  return (
    <div className='mx-auto my-0 flex max-w-7xl flex-wrap justify-between px-8 pb-0 pt-14 sm:pt-44'>
      <main className='flex-1 pb-14 lg:flex-[0_0_770px]'>
        <div className='divide-y divide-gray-200 dark:divide-gray-700'>
          {articles.map((article) => (
            <ArticleItem key={article.slug} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
}
