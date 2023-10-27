import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Javier Muñoz Tous',
  description:
    "Explore a diverse range of topics, including technology, development, and personal insights on my blog. Join the online community and engage in discussions with me on subjects I'm passionate about.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='bg-white text-black dark:bg-[#111010] dark:text-white'
    >
      <body
        className={cn(
          'mx-4 mb-40 mt-8 flex max-w-3xl flex-col antialiased md:flex-row lg:mx-auto',
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
