import type z from 'zod'
import type { BreadcrumbItemSchema } from '~/schemas/app/breadcrumb.schema'

export type BreadcrumbItem = z.infer<typeof BreadcrumbItemSchema>
