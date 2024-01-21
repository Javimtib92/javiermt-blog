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
import { notFound } from 'next/navigation';

type ArticlePageProps = {
  params: { slug: string; category: string };
};

const updateCounter = cache(async (slug: string) => {
  'use server';

  if (process.env.NODE_ENV !== 'production') return;

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

  const post = getArticleData(slug, category);

  if (!post) {
    return notFound();
  }

  const { frontMatter } = post;

  if (process.env.NODE_ENV === 'production' && frontMatter.draft) {
    return notFound();
  }

  // temporal disable
  // await updateCounter(slug);

  return (
    <section>
      <Heading>{frontMatter.title}</Heading>
      <div className='mb-8 mt-4 flex items-center justify-between text-sm'>
        <Paragraph className='mb-0 mt-0' subtle mono>
          {/* Now is computed on the server but probably I need the locale here so that I can format based on locale */}
          {formatDate(frontMatter.createdAt)}
        </Paragraph>
        <Paragraph className='mb-0 mt-0' subtle mono>
          {/* <ViewCount slug={slug} /> */}
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
): Promise<Metadata | undefined> {
  const { slug, category } = params;

  const post = getArticleData(slug, category);

  if (!post) {
    return;
  }

  const { frontMatter } = post;

  let image = `https://coding-kittens.com${frontMatter.thumbnail}`;

  const title = frontMatter.title;
  const description = frontMatter.shortDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: frontMatter.createdAt,
      url: `https://coding-kittens/blog/${category}/${slug}`,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images: [image],
    },
  };
}
