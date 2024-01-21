import prisma from '@/utils/prisma';
// import { unstable_noStore as noStore } from 'next/cache';

export async function ViewCount({ slug }: { slug: string }) {
  const data = await prisma.views.findUnique({ where: { slug } });

  if (!data) return '';

  return `${data.view_count} views`;
}
