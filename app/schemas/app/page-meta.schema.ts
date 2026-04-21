import z from 'zod'
import { MenuSchema } from './menu.schema'
import { BreadcrumbItemSchema } from './breadcrumb.schema'

export const PageMetaSchema = z.object({
  showInNavBar: z.boolean().optional(),
  showBack: z.boolean().optional(),
  requiresAuth: z.boolean().optional(),
  order: z.number().optional(),
  menu: MenuSchema.optional(),
  breadcrumb: z.array(BreadcrumbItemSchema).optional(),
})
