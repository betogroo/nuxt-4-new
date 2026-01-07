import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    notification: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
  },
})
