import { cn } from '@/utils/cn';
import { getAllCategories } from '@/utils/get-all-categories';
import Link from 'next/link';

export function CategoriesList({ selected }: { selected?: string }) {
  const categories = getAllCategories();

  const activeClass = 'bg-red-500 focus:ring-red-300 dark:focus:ring-red-700';
  const inactiveClass =
    'bg-gray-800 dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 focus:ring-gray-300 dark:focus:ring-gray-700';

  return (
    <div className='mb-4 flex flex-shrink flex-row flex-wrap'>
      <div className='h-12'>
        <Link
          href={`/blog`}
          className={cn(
            typeof selected === 'undefined' ? activeClass : inactiveClass,
            'mb-2 me-2 rounded-lg px-5 py-2.5 font-mono text-sm font-medium text-white focus:outline-none focus:ring-4'
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
                'mb-2 me-2 rounded-lg px-5 py-2.5 font-mono text-sm font-medium text-white  focus:outline-none focus:ring-4'
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
