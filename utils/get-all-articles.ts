import 'server-only';

import { ARTICLES_PATH } from '../constants';
import { fileCrawler } from './file-crawler';
import { removeMdxExtension } from './remove-mdx-extension';

export type QueryAllArticlesOptions = {
  filter?: {
    category?: string;
  };
};

export function getAllArticles(query?: QueryAllArticlesOptions) {
  const articles = [];

  for (const { path, fileName, createdAt, modifiedAt } of fileCrawler(
    ARTICLES_PATH
  )) {
    const slug = removeMdxExtension(fileName);

    const category = path[0];

    if (query?.filter?.category && query.filter.category !== category) {
      continue;
    }

    articles.push({
      slug,
      category,
      path: '/blog/' + path.join('/') + '/' + slug,
      createdAt,
      modifiedAt,
    });
  }

  return articles;
}
