'use client';

import dynamic from 'next/dynamic';

export async function MarkdownPage({ slug }: { slug: string }) {
  const Page = await dynamic(() => import(`@/_articles/${slug}.mdx`));

  return (
    <div>
      <Page />
    </div>
  );
}
