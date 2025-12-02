import { z } from '~/schemas'

export const MenuAreaSchema = z.enum(['navbar', 'drawer', 'footer'])

export const MenuSchema = z.object({
  areas: z.array(MenuAreaSchema),
  order: z.number().optional(),
  group: z.string().optional(),
  hidden: z.boolean(),
})
