import z from 'zod'

export const BreadcrumbItemSchema = z.object({
  title: z.string(),
  href: z.string().optional(),
  disabled: z.boolean().default(false).optional(),
})

export type BreadcrumbItem = z.infer<typeof BreadcrumbItemSchema>

