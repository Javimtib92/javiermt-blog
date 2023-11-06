import Image from 'next/image';
import image from '/public/me.jpeg';
import { CameraIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div>
      <div className='mb-6 flex flex-row items-center gap-6'>
        <span className='bg-default ring-offset-background dark:ring-offset-background-dark relative z-10 box-border flex h-20 w-20 items-center justify-center overflow-hidden rounded-full align-middle outline-none ring-2 ring-slate-500 ring-offset-2 data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2'>
          <Image
            src={image}
            alt='text'
            priority
            placeholder='blur'
            className='flex h-full w-full object-cover'
          />
        </span>

        <div className='flex flex-col place-self-start'>
          <h1 className='font-display text-2xl font-bold'>Javier Muñoz Tous</h1>
          <h1 className='font-mono text-sm italic'>Full Stack Developer</h1>
        </div>
      </div>
      <p className='text-justify text-slate-900 dark:text-gray-200'>
        Hola! 👋 My name is Javier, I&apos;m a Software Engineer with 8+ years
        of experience.
      </p>
      <br />
      <p className='text-justify text-slate-900 dark:text-gray-200'>
        I&apos;ve build this blog to create tutorials and share my thoughts on a
        diverse range of topics, including technology, development and personal
        insights. I&apos;ll try to be short, but helpful, and provide some value
        to our community.
      </p>
      <br />
      <p className='text-justify text-slate-900 dark:text-gray-200'>
        If you want to know me a bit better you can find me on instagram or, if
        you are interested in my professional career, you can check me out on
        Linkedn.
      </p>
      <br />
      <a
        href='https://www.instagram.com/javimtib92'
        aria-label='Javier Instagram Profile'
        className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white dark:focus:ring-pink-800'
      >
        <span className='relative flex flex-row items-center gap-2 rounded-md bg-white px-5 py-2.5 font-display text-lg transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
          Instagram
          <CameraIcon className='h-6 w-6' />
        </span>
      </a>
      <br />
      <br />
      Salut! 😄
    </div>
  );
}
