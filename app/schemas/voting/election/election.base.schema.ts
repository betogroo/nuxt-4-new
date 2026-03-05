import { z } from '~/schemas'
import type { Election } from '~/types'

export const ElectionSchema: z.ZodType<Election> = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Campo obrigatório'),
  created_at: z.string().datetime({ offset: true }),
  date: z.string().date(),
})
export const ElectionRowsSchema = z.array(ElectionSchema)
