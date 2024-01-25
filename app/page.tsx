import Image from 'next/image';
import image from '/public/me.jpeg';
import { getYearDiff } from '@/utils/dates';
import { Paragraph } from '@/lib/ui/paragraph';
import { Heading } from '@/lib/ui/heading';
import { SocialLink } from '@/components/social-link';
import LinkedinLogo from '/public/linkedin_logo.svg';
import InstagramLogo from '/public/instagram_logo.svg';
import GithubLogo from '/public/github_logo.svg';
import { Highlight } from '@/components/highlight';
import { LatestContent } from '@/components/latest-content';
import { Link } from '@/lib/ui/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div>
      <div className='mb-6 flex flex-row items-center gap-6'>
        <span
          className='
        box-border flex h-20 w-20 items-center justify-center overflow-hidden rounded-full align-middle outline-none
        ring-2 ring-background-50 ring-slate-500 ring-offset-2 ring-offset-accent-secondary-300
        dark:ring-background-500 dark:ring-offset-accent-secondary-500'
        >
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
            className='italic text-accent-500 underline underline-offset-8 dark:text-accent-400 sm:text-xl'
          >
            Full Stack Engineer
          </Heading>
        </div>
      </div>
      <Paragraph>
        <Highlight>
          <b className='font-display text-2xl text-primary-600 dark:text-primary-100'>
            Hola 👋, Welcome to Coding Kittens!
          </b>
        </Highlight>
      </Paragraph>
      <Paragraph>
        I&apos;m Javier Muñoz Tous and this is my own personal blog built with
        the simple intention of creating tutorials, sharing my thoughts,
        experimenting with new tools, having fun, and being somehow helpful to
        our tech community.
      </Paragraph>
      <Paragraph>
        I&apos;m a Fullstack Software Engineer with over{' '}
        {getYearDiff(new Date('2015-05-01'), new Date())} years of experience.
        I&apos;m currently specialized in JavaScript, but I&apos;m a man of the
        world and I can “speak” many languages.
      </Paragraph>
      <Paragraph>
        <Highlight>
          Coding Kittens&apos;s name idea came from my two adorable cats — Loki
          and Nym —
        </Highlight>{' '}
        who have been with me a lot of my coding time. One could say they code
        for me and I just watch them. 🤫 My fiance came up with the name idea,
        she is my most profound inspiration and a huge source of support. 🧡🖤
      </Paragraph>
      <Paragraph>
        I like simple things, I practice Yoga twice a week 🧘‍♂️ I’m passionate
        about video-games 🎮 I&apos;m a Manga and Anime &quot;Otaku&quot; ⛩️ and
        my favorite meal is ramen 🍜
      </Paragraph>
      <Paragraph>
        If you want to know me a bit better you can find me on Instagram. I warn
        you, though, that every now and then I post stories of my cats doing
        something tremendously silly.
      </Paragraph>
      <Paragraph>
        If my professional career is what interests you, you can check my
        LinkedIn or Github profiles.
      </Paragraph>
      <Paragraph>
        I hope you find some calm and insight in this little space I&apos;ve
        built.
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

      <div className='mt-12'>
        <Heading level={3}>The Latest Coding Kittens Posts</Heading>

        <LatestContent />

        <div>
          <Link href='/blog' className='flex flex-row items-center gap-2'>
            Browse all posts
            <ArrowRightIcon width={12} height={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
