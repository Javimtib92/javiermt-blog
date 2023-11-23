import { ArticlesList } from '@/components/articles-list';
import { CategoriesList } from '@/components/categories-list';

export default async function BlogPage() {
  return (
    <>
      <CategoriesList />
      <h1 className='pb-2 font-display text-4xl font-bold capitalize text-yellow-600 dark:text-yellow-300'>
        All blog posts
      </h1>
      <ArticlesList></ArticlesList>
    </>
  );
}
