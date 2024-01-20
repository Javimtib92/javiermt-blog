import { getAllArticles } from '@/utils/get-all-articles';
import { getAllCategories } from '@/utils/get-all-categories';
import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default function Sitemap(): MetadataRoute.Sitemap {
  const headersList = headers();
  const host = headersList.get('host');

  const articles = getAllArticles();

  const categories = getAllCategories();

  return [
    {
      url: 'https://' + host + '/',
      lastModified: '2018-10-20T01:46:40.000Z',
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: 'https://' + host + '/blog',
      lastModified: '2018-10-20T01:46:40.000Z',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...categories.map((category) => ({
      url: 'https://' + host + '/blog/' + category,
      lastModified: '2018-10-20T01:46:40.000Z',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...articles.map(({ path, modifiedAt }) => ({
      url: 'https://' + host + path,
      lastModified: modifiedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
