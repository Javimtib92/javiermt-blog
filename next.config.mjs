import createMDX from '@next/mdx';

import remarkReadingTime from 'remark-reading-time';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkEmoji from 'remark-emoji';
import moonlight from './themes/moonlight-ii.json' assert { type: 'json' };
import {
  transformerNotationFocus,
  transformerNotationDiff,
} from 'shikiji-transformers';

const prettyCodeOptions = {
  keepBackground: false,
  theme: {
    dark: moonlight,
    light: 'github-light',
  },
  defaultLang: 'jsx',
  transformers: [transformerNotationFocus(), transformerNotationDiff()],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkReadingTime,
      [remarkEmoji, { accessible: true }],
    ],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    ppr: false,
  },
};

export default withMDX(nextConfig);
