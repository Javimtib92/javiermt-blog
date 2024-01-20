import { getAllArticles } from '@/utils/get-all-articles';
import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default function Sitemap(): MetadataRoute.Sitemap {
  const headersList = headers();
  const host = headersList.get('host');

  const articles = getAllArticles();

  return [
    {
      url: 'https://' + host + '/',
      lastModified: '2018-10-20T01:46:40.000Z',
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...articles.map(({ path, modifiedAt }) => ({
      url: 'https://' + host + path,
      lastModified: modifiedAt,
      changeFrequency: 'monthly' as const,
      priority: 1,
    })),
  ];
}
