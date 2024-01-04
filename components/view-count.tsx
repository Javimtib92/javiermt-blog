import prisma from '@/utils/prisma';
import { unstable_noStore as noStore } from 'next/cache';

export async function ViewCount({ slug }: { slug: string }) {
  noStore(); //to be added when partial pre-rendering works well with client side navigations
  const data = await prisma.views.findUnique({ where: { slug } });

  if (!data) return '';

  return `${data.view_count} views`;
}
