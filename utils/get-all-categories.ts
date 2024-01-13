import 'server-only';

import { readdirSync } from 'fs';
import { ARTICLES_PATH } from '../constants';
import { join } from 'path';
import { removeMdxExtension } from './remove-mdx-extension';
import { getArticleData } from './get-article-data';

/**
 *  Crawls the file system of ARTICLES_PATH to dynamically find categories based on folder structure
 * @returns production: all categories that have 1 or n published articles
 * @returns dev: all categories
 */
export function getAllCategories() {
  const files = readdirSync(ARTICLES_PATH, { withFileTypes: true });

  return files
    .filter((dir) => {
      // returns all articles in development mode
      if (process.env.NODE_ENV === 'development') {
        return true;
      }

      const files = readdirSync(join(dir.path, dir.name), {
        withFileTypes: true,
      });

      const publishedArticles = files.filter((file) => {
        const slug = removeMdxExtension(file.name);
        const data = getArticleData(slug, dir.name);

        if (!data) {
          return false;
        }

        const { frontMatter } = data;

        return !frontMatter.draft;
      });

      return publishedArticles.length > 0;
    })
    .map((file) => file.name);
}
