import { ArticlesList } from '@/components/articles-list';
import { CategoriesList } from '@/components/categories-list';

export default async function BlogPage() {
  return (
    <>
      <CategoriesList />
      <h1 className='text-primary-600 dark:text-primary-300 pb-2 font-display text-4xl font-bold capitalize'>
        All blog posts
      </h1>
      <ArticlesList></ArticlesList>
    </>
  );
}
