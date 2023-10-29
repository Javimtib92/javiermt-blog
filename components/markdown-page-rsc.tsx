import dynamic from 'next/dynamic';

export async function MarkdownPageRSC({ slug }: { slug: string }) {
  const Page = await dynamic(() => import(`@/_articles/${slug}.mdx`), {
    ssr: true,
  });

  return <Page />;
}
