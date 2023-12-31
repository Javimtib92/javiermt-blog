import Image from 'next/image';
import image from '/public/me.jpeg';
import { getYearDiff } from '@/utils/dates';
import { Paragraph } from '@/lib/ui/paragraph';
import { Heading } from '@/lib/ui/heading';
import { SocialLink } from '@/components/social-link';
import LinkedinLogo from '/public/linkedin_logo.svg';
import InstagramLogo from '/public/instagram_logo.svg';
import GithubLogo from '/public/github_logo.svg';

export default function Home() {
  return (
    <div>
      <div className='mb-6 flex flex-row items-center gap-6'>
        <span className='bg-default ring-offset-background dark:ring-offset-background-dark box-border flex h-20 w-20 items-center justify-center overflow-hidden rounded-full align-middle outline-none ring-2 ring-slate-500 ring-offset-2 data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2'>
          <Image
            src={image}
            alt='text'
            priority
            placeholder='blur'
            className='flex h-full w-full object-cover'
          />
        </span>

        <div className='flex flex-col place-self-start'>
          <Heading className='text-3xl leading-7 sm:text-4xl'>
            Javier Muñoz Tous
          </Heading>
          <Heading
            level={2}
            className='italic text-accent-secondary-400 underline underline-offset-8 dark:text-accent-secondary-400 sm:text-xl'
          >
            Full Stack Engineer
          </Heading>
        </div>
      </div>
      <Paragraph>Hola! 👋 </Paragraph>
      <Paragraph>
        My name is Javier, I&apos;m a Full Stack Software Engineer with{' '}
        {getYearDiff(new Date('2015-05-01'), new Date())}+ years of experience
        using Javascript.
      </Paragraph>
      <Paragraph>
        I&apos;ve built this blog to create tutorials and share my thoughts on a
        diverse range of topics, including technology, development and personal
        insights. I&apos;ll try to be short but helpful and provide some value
        to our community.
      </Paragraph>
      <Paragraph>
        I love my fiance and my two adorable cats 🩶 🧡 I practice Yoga twice a
        week 🧘‍♂️ I was a very good swimmer when I was younger 🏊 I&apos;m
        passionate about video-games 🎮 and my favorite meal is ramen 🍜
      </Paragraph>
      <Paragraph>
        If you want to know me a bit better you can find me on Instagram, or if
        you are interested in my professional career, you can check me out on
        LinkedIn or Github.
      </Paragraph>
      <Paragraph>Salut! 😄</Paragraph>
      <div className='flex flex-col gap-6 sm:flex-row'>
        <SocialLink
          img={InstagramLogo}
          name='Instagram'
          link='https://www.instagram.com/javimtib92'
        ></SocialLink>
        <SocialLink
          img={LinkedinLogo}
          name='LinkedIn'
          link='https://www.linkedin.com/in/javier-muñoz-tous/'
        ></SocialLink>
        <SocialLink
          img={GithubLogo}
          name='Github'
          link='https://github.com/Javimtib92'
        ></SocialLink>
      </div>
    </div>
  );
}
