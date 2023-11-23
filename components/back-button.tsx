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
          <ArrowLeftIcon className='h-6 w-6 text-yellow-600 dark:text-yellow-300' />
        </span>
        <span className='text-lg font-medium text-yellow-600 dark:text-yellow-300'>
          Back
        </span>
      </button>
    </div>
  );
}
