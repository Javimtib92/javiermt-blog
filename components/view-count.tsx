import prisma from '@/utils/prisma';
import { unstable_noStore as noStore } from 'next/cache';

export async function ViewCount({ slug }: { slug: string }) {
  noStore();
  const data = await prisma.views.findUnique({ where: { slug } });

  return `${data.view_count} views`;
}
