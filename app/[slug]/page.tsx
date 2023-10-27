import type { Metadata, ResolvingMetadata } from 'next';
import { MarkdownPage } from '@/components/markdown-page';
import { getAllArticles } from '@/utils/get-all-articles';
import { getArticleData } from '@/utils/get-article-data';

type ArticlePageProps = {
  params: { slug: string };
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;

  return (
    <div>
      <MarkdownPage slug={slug} />
    </div>
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
