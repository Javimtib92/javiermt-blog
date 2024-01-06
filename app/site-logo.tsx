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
        <div className='hidden flex-col sm:flex'>
          <Heading
            level={1}
            className='text-2xl dark:text-2xl sm:text-2xl sm:dark:text-2xl'
          >
            Coding Kittens
          </Heading>
          <Paragraph className='m-0' subtle>
            Curiosity Didn&apos;t Kill The Cat
          </Paragraph>
        </div>
      </Link>
    </>
  );
}
