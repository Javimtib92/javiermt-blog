import { getAllArticles } from '@/utils/get-all-articles';
import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default function Sitemap(): MetadataRoute.Sitemap {
  const headersList = headers();
  const host = headersList.get('host');

  const articles = getAllArticles();

  return articles.map(({ path, modifiedAt }) => ({
    url: host + path,
    lastModified: modifiedAt,
    changeFrequency: 'monthly',
    priority: 1,
  }));
}
