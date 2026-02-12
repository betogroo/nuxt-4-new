import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    ui: defineCollection({
      type: 'page',
      source: 'ui/**/*.md',
    }),
    app: defineCollection({
      type: 'page',
      source: 'app/**/*.md',
    }),
    docs: defineCollection({
      type: 'page',
      source: 'docs/**/*.md',
    }),
  },
})
