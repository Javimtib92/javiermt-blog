import dynamic from 'next/dynamic';

export async function MarkdownPageRSC({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  const Page = await dynamic(
    () => import(`@/_articles/${category}/${slug}.mdx`),
    {
      ssr: true,
    }
  );

  return <Page />;
}
