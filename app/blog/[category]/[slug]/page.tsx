import type { Metadata, ResolvingMetadata } from 'next';
import { getAllArticles } from '@/utils/get-all-articles';
import { getArticleData } from '@/utils/get-article-data';
import { formatDate } from '@/utils/dates';
import { MarkdownPageRSC } from '@/components/markdown-page-rsc';
import prisma from '@/utils/prisma';
import { ViewCount } from '@/components/view-count';
import { Suspense } from 'react';

type ArticlePageProps = {
  params: { slug: string; category: string };
};

const updateCounter = async (slug: string) => {
  'use server';

  try {
    await prisma.views.upsert({
      where: {
        slug,
      },
      update: {
        view_count: {
          increment: 1,
        },
      },
      create: {
        slug,
        view_count: 1,
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
  }
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug, category } = params;

  const { frontMatter } = await getArticleData(slug, category);

  await updateCounter(slug);

  return (
    <section>
      <h1 className='font-display text-2xl font-bold'>{frontMatter.title}</h1>
      <div className='mb-8 mt-2 flex items-center justify-between text-sm'>
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          {/* Now is computed on the server but probably I need the locale here so that I can format based on locale */}
          {formatDate(frontMatter.createdAt)}
        </p>
        <p className='text-neutral-600 dark:text-neutral-400'>
          <Suspense fallback={''}>
            <ViewCount slug={slug} />
          </Suspense>
        </p>
      </div>

      <article>
        <MarkdownPageRSC slug={slug} category={category}></MarkdownPageRSC>
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
  const { slug, category } = params;

  const { frontMatter } = await getArticleData(slug, category);

  console.log(slug, category);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: frontMatter.title,
    description: frontMatter.shortDescription,
    openGraph: {
      images: [frontMatter.thumbnail, ...previousImages],
    },
  };
}
