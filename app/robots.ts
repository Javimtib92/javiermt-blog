import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default function robots(): MetadataRoute.Robots {
  const headersList = headers();
  const host = headersList.get('host');

  const AIBots = [
    'GPTBot',
    'ChatGPT-User',
    'OmgiliBot',
    'CCbot',
    'FacebookBot',
  ];

  return {
    rules: AIBots.map((ai) => ({
      userAgent: ai,
      disallow: '/',
    })),
    sitemap: `https://${host}/sitemap.xml`,
  };
}
