import { z } from '~/schemas'

export const BreadcrumbItemSchema = z.object({
  title: z.string(),
  href: z.string().optional(),
  disabled: z.boolean().default(false).optional(),
})
