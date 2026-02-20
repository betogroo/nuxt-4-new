import { z, IconSchema } from '~/schemas'

export const MenuAreaSchema = z.enum(Object.keys(MENU_ORDER) as [keyof typeof MENU_ORDER])

/* export const PrioritySchema = z.object({
  navbar: z.enum(MENU_ORDER.navbar).optional(),
  drawer: z.enum(MENU_ORDER.drawer).optional(),
  footer: z.enum(MENU_ORDER.footer).optional(),
}) */

export const PrioritySchema = z.union([
  z.enum(MENU_ORDER.navbar),
  z.enum(MENU_ORDER.drawer),
  z.enum(MENU_ORDER.footer),
  z.enum(MENU_ORDER.components),
])

export const MenuSchema = z.object({
  title: z.string().min(1),
  areas: z.array(MenuAreaSchema).optional(),
  group: z.string().optional(),
  priority: PrioritySchema.optional(),
  hidden: z.boolean().default(true),
  icon: IconSchema.optional(),
})
