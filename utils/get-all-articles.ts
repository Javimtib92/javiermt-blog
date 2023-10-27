import 'server-only';

import { ARTICLES_PATH } from '../constants';
import { fileCrawler } from './file-crawler';
import { removeMdxExtension } from './remove-mdx-extension';

export function getAllArticles() {
  const articles = [];

  for (const { path, fileName } of fileCrawler(ARTICLES_PATH)) {
    const slug = removeMdxExtension(fileName);

    articles.push({ slug, path: path.join('/') + '/' + slug });
  }

  return articles;
}
