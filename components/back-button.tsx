'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  return (
    <div className='mb-10 max-w-7xl'>
      <button
        className='flex items-center space-x-4 text-accent-400 hover:text-accent-300 focus:outline-none'
        onClick={() => router.back()}
      >
        <span>
          <ArrowLeftIcon className='h-4 w-4' />
        </span>
        <span className='text-md font-medium'>Back</span>
      </button>
    </div>
  );
}
