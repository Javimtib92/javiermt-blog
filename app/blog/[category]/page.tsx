import { ArticlesList } from '@/components/articles-list';
import { CategoriesList } from '@/components/categories-list';
import { getAllCategories } from '@/utils/get-all-categories';
import { notFound } from 'next/navigation';

type CategoryPageProps = {
  params: { category: string };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  const categories = getAllCategories();

  if (!categories.includes(category)) {
    return notFound();
  }

  return (
    <div className='flex flex-col'>
      <CategoriesList selected={category} />
      <ArticlesList
        query={{
          filter: {
            category,
          },
        }}
      ></ArticlesList>
    </div>
  );
}

export async function generateStaticParams() {
  return getAllCategories();
}
