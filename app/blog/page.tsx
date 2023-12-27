import { ArticlesList } from '@/components/articles-list';
import { CategoriesList } from '@/components/categories-list';

export default async function BlogPage() {
  return (
    <>
      <CategoriesList />
      <ArticlesList></ArticlesList>
    </>
  );
}
