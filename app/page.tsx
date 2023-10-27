import { ArticlesList } from '@/components/articles-list';

export default async function Home() {
  return (
    <main className='overflow-x-hidden'>
      <ArticlesList></ArticlesList>
    </main>
  );
}
