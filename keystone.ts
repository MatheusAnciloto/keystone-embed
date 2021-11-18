import { config, list } from '@keystone-next/keystone';
import { text } from '@keystone-next/keystone/fields';

const Post = list({
  fields: {
    title: text(),
    slug: text({ isFilterable: true }),
    content: text(),
  },
});

export default config({
  db: { provider: 'postgresql', url: process.env.DATABASE_URL || ''  },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
});