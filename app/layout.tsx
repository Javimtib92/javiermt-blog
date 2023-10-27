import type { Metadata } from 'next';
import {
  Oswald,
  Source_Serif_4,
  Fjalla_One,
  Libre_Baskerville,
  Karla,
  Merriweather,
  Source_Sans_3,
  Quattrocento,
  Lora,
  Quattrocento_Sans,
  Playfair_Display,
  Raleway,
  Open_Sans,
  Space_Mono,
  Nunito,
  Oxygen_Mono,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';

// const sansSerif = Oswald({ subsets: ['latin'], variable: '--font-sans-serif' });
// const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' });

// const sansSerif = Fjalla_One({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-sans-serif',
// }); // Title font
// const serif = Libre_Baskerville({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-serif',
// }); // Paragraph font

// const sansSerif = Karla({ subsets: ['latin'], variable: '--font-sans-serif' });
// const serif = Merriweather({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-serif',
// });

// const sansSerif = Libre_Baskerville({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-sans-serif',
// });
// const serif = Source_Sans_3({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-serif',
// });

const display = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
});
const body = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

const mono = Oxygen_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
});

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
          display.variable,
          body.variable,
          mono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
