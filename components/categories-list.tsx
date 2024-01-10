import { cn } from '@/utils/cn';
import { getAllCategories } from '@/utils/get-all-categories';
import Link from 'next/link';

export function CategoriesList({ selected }: { selected?: string }) {
  const categories = getAllCategories();

  const activeClass =
    'bg-accent-secondary-500 focus:ring-accent-secondary-300 dark:focus:ring-accent-secondary-700';
  const inactiveClass =
    'bg-primary-300 dark:bg-primary-800 hover:bg-primary-400 dark:hover:bg-primary-500 focus:ring-primary-300 dark:focus:ring-primary-600';

  return (
    <div className='mb-4 flex flex-shrink flex-row flex-wrap'>
      <div className='h-auto'>
        <Link
          href={`/blog`}
          className={cn(
            typeof selected === 'undefined' ? activeClass : inactiveClass,
            'mb-2 me-2 inline-block rounded-lg px-5 py-2.5 font-mono text-sm font-medium text-white focus:outline-none focus:ring-4'
          )}
        >
          All
        </Link>
        {categories.map((category) => {
          return (
            <Link
              key={category}
              href={`/blog/${category}`}
              className={cn(
                selected === category ? activeClass : inactiveClass,
                'mb-2 me-2 inline-block h-10 rounded-lg px-5 py-2.5 font-mono text-sm font-medium text-white focus:outline-none focus:ring-4'
              )}
            >
              {category}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
