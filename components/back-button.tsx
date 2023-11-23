'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  return (
    <div className='mb-10 max-w-7xl'>
      <button
        className='flex items-center space-x-4 focus:outline-none'
        onClick={() => router.back()}
      >
        <span>
          <ArrowLeftIcon className='text-secondary-600 dark:text-secondary-300 h-4 w-4' />
        </span>
        <span className='text-secondary-600 dark:text-secondary-300 text-md font-medium'>
          Back
        </span>
      </button>
    </div>
  );
}
