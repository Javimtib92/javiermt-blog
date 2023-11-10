import type { Metadata, ResolvingMetadata } from 'next';
import { MarkdownPage } from '@/components/markdown-page';
import { getAllArticles } from '@/utils/get-all-articles';
import { getArticleData } from '@/utils/get-article-data';
import { formatDate } from '@/utils/dates';
import { MarkdownPageRSC } from '@/components/markdown-page-rsc';
import prisma from '@/utils/prisma';

type ArticlePageProps = {
  params: { slug: string };
};

const updateCounter = async (slug: string, newCount: number) => {
  'use server';

  try {
    // Update the count in the database

    const data = await prisma.views.upsert({
      where: {
        slug,
      },
      update: {
        view_count: newCount,
      },
      create: {
        slug,
        view_count: 1,
      },
    });

    console.log('Count updated successfully:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
  }
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;

  const { frontMatter } = await getArticleData(slug);

  const data = await prisma.views.findUnique({ where: { slug } });

  const viewCount = data?.view_count || 0;
  const newCount = viewCount + 1;

  if (process.env.NODE_ENV === 'production') {
    await updateCounter(slug, newCount);
  }

  return (
    <section>
      <h1 className='font-display text-2xl font-bold'>{frontMatter.title}</h1>
      <div className='mb-8 mt-2 flex items-center justify-between text-sm'>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          {/* Now is computed on the server but probably I need the locale here so that I can format based on locale */}
          {formatDate(frontMatter.createdAt)}
        </p>
        <p className='text-neutral-600 dark:text-neutral-400'>
          {newCount} views
        </p>
      </div>

      <article>
        {/* We render MDX files on Server Side only in production because in dev there's an issue.
          See issue: https://github.com/vercel/next.js/issues/49355
        */}
        {process.env.NODE_ENV === 'production' ? (
          <MarkdownPageRSC slug={slug}></MarkdownPageRSC>
        ) : (
          <MarkdownPage slug={slug} />
        )}
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
