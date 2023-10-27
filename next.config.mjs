import createMDX from '@next/mdx';

import remarkReadingTime from 'remark-reading-time';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrettyCode from 'rehype-pretty-code';

const prettyCodeOptions = {
  theme: 'one-dark-pro',
  defaultLang: 'jsx',
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkReadingTime],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
