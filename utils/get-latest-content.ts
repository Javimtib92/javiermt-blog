import { compareAsc, compareDesc } from './dates';
import { getAllArticles } from './get-all-articles';

const DEFAULT_MAX_OUTPUT_COUNT = 5;

export async function getLatestContent(
  maxOutputCount = DEFAULT_MAX_OUTPUT_COUNT
) {
  const articles = await getAllArticles();

  const sortedArticles = articles.sort((a, b) => {
    return compareDesc(a.createdAt, b.createdAt);
  });

  return sortedArticles.slice(0, maxOutputCount);
}
