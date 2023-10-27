import 'server-only';

import { ARTICLES_PATH } from '../constants';
import { getParsedFileContentBySlug } from './markdown/markdown';
import { cache } from 'react';

export const getArticleData = cache(async (slug: string) => {
  const { frontMatter, content } = getParsedFileContentBySlug(
    slug,
    `${ARTICLES_PATH}`
  );

  return {
    frontMatter,
    content,
  };
});
