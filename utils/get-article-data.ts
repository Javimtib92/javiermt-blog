import 'server-only';

import { ARTICLES_PATH } from '../constants';
import { cache } from 'react';
import { join } from 'path';
import matter from 'gray-matter';
import getReadingTime from 'reading-time';

export const getArticleData = cache(async (slug: string, category: string) => {
  const { data, content } = matter.read(
    join(ARTICLES_PATH, `${category}/${slug}.mdx`)
  );

  return {
    frontMatter: data,
    readingTime: getReadingTime(content),
    content,
  };
});
