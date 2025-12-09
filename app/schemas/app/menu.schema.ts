import { z } from '~/schemas'

export const MenuAreaSchema = z.enum(['navbar', 'drawer', 'footer'])
export const PrioritySchema = z.object({
  navbar: z.number().optional(),
  drawer: z.number().optional(),
  footer: z.number().optional(),
})

export const MenuSchema = z.object({
  title: z.string().min(1),
  areas: z.array(MenuAreaSchema),
  group: z.string().optional(),
  priority: PrioritySchema.optional(),
  hidden: z.boolean().default(true),
  icon: z.string().optional(),
})
