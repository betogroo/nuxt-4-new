import type { ParsedContentv2 } from '@nuxt/content'

export interface NotificationContent extends ParsedContentv2 {
  slug: string
  title?: string
}
