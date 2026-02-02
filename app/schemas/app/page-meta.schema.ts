import { z, MenuSchema, BreadcrumbItemSchema } from '~/schemas'

export const PageMetaSchema = z.object({
  showInNavBar: z.boolean().optional(),
  showBack: z.boolean().optional(),
  requiresAuth: z.boolean().optional(),
  order: z.number().optional(),
  menu: MenuSchema.optional(),
  breadcrumb: z.array(BreadcrumbItemSchema).optional(),
})
