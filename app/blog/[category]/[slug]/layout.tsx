import { ReactNode } from 'react';
import { BackButton } from '@/components/back-button';

export default function ArticleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BackButton />
      {children}
    </>
  );
}
