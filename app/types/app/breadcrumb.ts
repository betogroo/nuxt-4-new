import type { z, BreadcrumbItemSchema } from '~/schemas'

export type BreadcrumbItem = z.infer<typeof BreadcrumbItemSchema>
