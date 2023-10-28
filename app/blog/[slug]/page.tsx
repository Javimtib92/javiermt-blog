import type { Metadata, ResolvingMetadata } from 'next';
import { MarkdownPage } from '@/components/markdown-page';
import { getAllArticles } from '@/utils/get-all-articles';
import { getArticleData } from '@/utils/get-article-data';
import { formatDate } from '@/utils/dates';

type ArticlePageProps = {
  params: { slug: string };
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;

  const { frontMatter } = await getArticleData(slug);

  return (
    <section>
      <h1 className='font-display text-2xl font-bold'>{frontMatter.title}</h1>
      <div className='mb-8 mt-2 flex items-center justify-between text-sm'>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          {/* Now is computed on the server but probably I need the locale here so that I can format based on locale */}
          {formatDate(frontMatter.createdAt)}
        </p>
        <p className='text-neutral-600 dark:text-neutral-400'>19.796 views</p>
      </div>

      <article>
        <MarkdownPage slug={slug} />
      </article>
    </section>
  );
}

export async function generateStaticParams() {
  return getAllArticles();
}

export async function generateMetadata(
  { params }: ArticlePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const { frontMatter } = await getArticleData(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: frontMatter.title,
    description: frontMatter.shortDescription,
    openGraph: {
      images: [frontMatter.thumbnail, ...previousImages],
    },
  };
}
