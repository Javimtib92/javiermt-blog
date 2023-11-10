import 'server-only';

import { ARTICLES_PATH } from '../constants';
import { fileCrawler } from './file-crawler';
import { removeMdxExtension } from './remove-mdx-extension';
import prisma from '@/utils/prisma';

export async function getAllArticles() {
  const articles = [];

  let viewCountBySlug: {
    slug: string;
    view_count: number;
  }[] = [];

  if (process.env.NODE_ENV === 'production') {
    viewCountBySlug = await prisma.views.findMany({
      select: {
        view_count: true,
        slug: true,
      },
    });
  }

  for (const { path, fileName, createdAt, modifiedAt } of fileCrawler(
    ARTICLES_PATH
  )) {
    const slug = removeMdxExtension(fileName);

    articles.push({
      slug,
      path: '/blog' + path.join('/') + '/' + slug,
      createdAt,
      modifiedAt,
      view_count:
        viewCountBySlug.find((item) => item.slug === slug)?.view_count || 0,
    });
  }

  return articles;
}
