import { ArticlesList } from '@/components/articles-list';
import { CategoriesList } from '@/components/categories-list';
import { getAllArticles } from '@/utils/get-all-articles';

type CategoryPageProps = {
  params: { category: string };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  return (
    <div className='flex flex-col'>
      <CategoriesList selected={category} />
      <h1 className='text-accent-800 dark:text-accent-400 pb-2 font-display text-4xl font-bold capitalize'>
        {category} blog posts
      </h1>
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
  //TODO: Change for all categories
  return getAllArticles();
}
