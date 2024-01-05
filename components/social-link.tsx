import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image, { StaticImageData } from 'next/image';

export function SocialLink({
  img,
  link,
  name,
}: {
  img: StaticImageData | string;
  link: string;
  name: string;
}) {
  return (
    <div className='group flex'>
      <a
        href={link}
        target='_blank'
        className='flex items-center justify-between rounded border border-background-200 bg-background-50 px-4 py-4 dark:border-background-400 dark:bg-background-500'
      >
        <div className='flex items-center space-x-3'>
          <div className='relative h-6 rounded-full bg-white'>
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes='33vw'
              className='h-6 w-6 rounded-full border'
              priority
            />
          </div>
          <div className='flex flex-col'>
            <p className='font-medium text-neutral-900 dark:text-neutral-100'>
              {name}
            </p>
          </div>
        </div>
        <div className='transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300'>
          <ArrowUpRightIcon />
        </div>
      </a>
    </div>
  );
}
