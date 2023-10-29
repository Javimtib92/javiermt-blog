import dynamic from 'next/dynamic';

export async function MarkdownPage({ slug }: { slug: string }) {
  const Page = await dynamic(() => import(`@/_articles/${slug}.mdx`), {
    // We render MDX files on Server Side only in production because in dev there's an issue:
    // https://github.com/vercel/next.js/issues/49355
    ssr: process.env.NODE_ENV === 'production',
  });

  return (
    <div>
      <Page />
    </div>
  );
}
