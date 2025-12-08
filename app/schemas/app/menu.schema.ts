import { z } from '~/schemas'

export const MenuAreaSchema = z.enum(['navbar', 'drawer', 'footer'])

export const MenuSchema = z.object({
  title: z.string().min(1),
  areas: z.array(MenuAreaSchema),
  order: z.number().optional(),
  group: z.string().optional(),
  hidden: z.boolean().default(true),
  icon: z.string().optional(),
})
