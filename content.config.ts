import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    ui: defineCollection({
      type: 'page',
      source: 'ui/**/*.md',
    }),
  },
})
