import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Blog | Javier Muñoz Tous',
  description:
    'Explore a diverse range of topics, including technology, development, and personal insights on my blog.',
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
