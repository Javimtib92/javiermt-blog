import type { Metadata, ResolvingMetadata } from 'next';
import { getAllArticles } from '@/utils/get-all-articles';
import { getArticleData } from '@/utils/get-article-data';
import { formatDate } from '@/utils/dates';
import { MarkdownPageRSC } from '@/components/markdown-page-rsc';
import prisma from '@/utils/prisma';
import { ViewCount } from '@/components/view-count';
import { Suspense, cache } from 'react';
import { Heading } from '@/lib/ui/heading';
import { Paragraph } from '@/lib/ui/paragraph';

type ArticlePageProps = {
  params: { slug: string; category: string };
};

const updateCounter = cache(async (slug: string) => {
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
});

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug, category } = params;

  const { frontMatter } = await getArticleData(slug, category);

  await updateCounter(slug);

  return (
    <section>
      <Heading>{frontMatter.title}</Heading>
      <div className='mb-8 mt-4 flex items-center justify-between text-sm'>
        <Paragraph className='mb-0 mt-0' subtle mono>
          {/* Now is computed on the server but probably I need the locale here so that I can format based on locale */}
          {formatDate(frontMatter.createdAt)}
        </Paragraph>
        <Paragraph className='mb-0 mt-0' subtle mono>
          <Suspense fallback={''}>
            <ViewCount slug={slug} />
          </Suspense>
        </Paragraph>
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

  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL('https://coding-kittens.com'),
    title: frontMatter.title,
    description: frontMatter.shortDescription,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.shortDescription,
      images: [frontMatter.thumbnail, ...previousImages],
      type: 'article',
      publishedTime: new Date(frontMatter.createdAt).toISOString(),
      authors: ['Javier Muñoz Tous'],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontMatter.title,
      description: frontMatter.shortDescription,
      creator: '@Javimt_ib',
      images: [frontMatter.thumbnail, ...previousImages],
    },
  };
}
