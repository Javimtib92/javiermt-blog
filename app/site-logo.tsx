import { Heading } from '@/lib/ui/heading';
import { Link } from '@/lib/ui/link';
import { Paragraph } from '@/lib/ui/paragraph';
import Image from 'next/image';
import Logo from '/public/logo.png';

export function SiteLogo() {
  return (
    <>
      <Link href='/' className='flex flex-row items-center'>
        <Image
          alt='website logo'
          src={Logo}
          width={48}
          height={48}
          className='mr-4'
        />
        <div className='flex flex-col'>
          <Paragraph className='m-0 font-display text-2xl font-bold text-primary-800 dark:text-2xl dark:text-primary-100 sm:text-2xl sm:dark:text-2xl'>
            Coding Kittens
          </Paragraph>
          <Paragraph className='m-0' subtle>
            Curiosity Didn&apos;t Kill The Cat
          </Paragraph>
        </div>
      </Link>
    </>
  );
}
