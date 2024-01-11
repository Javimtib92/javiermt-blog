import { Link } from '@/lib/ui/link';
import { Paragraph } from '@/lib/ui/paragraph';
import Image from 'next/image';
import image from '/public/me.jpeg';

export function Footer() {
  return (
    <footer className='h-auto w-full bg-primary-100 dark:bg-background-500'>
      <div className='flex max-w-3xl flex-col gap-4 px-6 py-4 sm:px-0 md:mx-auto'>
        <div className='flex flex-row items-center gap-4'>
          <Paragraph subtle mono className='px-0 sm:px-2'>
            Created By
          </Paragraph>

          <span
            className='
                box-border flex h-8 w-8 items-center overflow-hidden rounded-full align-middle outline-none
                ring-2 ring-background-50 ring-offset-2 ring-offset-accent-secondary-300
                dark:ring-background-500 dark:ring-offset-accent-secondary-500
                sm:h-12 sm:w-12'
          >
            <Image
              src={image}
              alt='image of Javier Muñoz Tous'
              placeholder='blur'
              className='h-8 w-8 object-cover sm:h-12 sm:w-12'
            ></Image>
          </span>
        </div>

        <div className='h-1 w-[90%] border-b border-solid border-b-primary-200 dark:border-b-background-400 sm:w-full'></div>

        <div className='flex w-auto flex-col justify-between sm:w-full sm:flex-row sm:items-center'>
          <Paragraph subtle mono className='px-0 sm:px-2'>
            © 2024 Javier Muñoz Tous
          </Paragraph>
          <div>
            <Paragraph subtle mono>
              <Link
                href='https://twitter.com/Javimt_ib'
                className='-m-2 p-2 font-bold'
              >
                X (Twitter)
              </Link>{' '}
              ·{' '}
              <Link
                href='https://github.com/Javimtib92'
                className='-m-2 p-2 font-bold'
              >
                Github
              </Link>{' '}
              ·{' '}
              <Link
                href='https://www.linkedin.com/in/javier-muñoz-tous/'
                className='-m-2 p-2 font-bold'
              >
                LinkedIn
              </Link>{' '}
              ·{' '}
              <Link
                href='https://www.instagram.com/javimtib92'
                className='-m-2 p-2 font-bold'
              >
                Instagram
              </Link>
            </Paragraph>
          </div>
        </div>
      </div>
    </footer>
  );
}
