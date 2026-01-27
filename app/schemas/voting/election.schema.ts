import { z } from '~/schemas'
import type { Election, ElectionInsert, ElectionUpdate } from '~/types'

export const ElectionSchema: z.ZodType<Election> = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Campo obrigatório'),
  created_at: z.string().datetime({ offset: true }),
  date: z.string().date(),
})
export const ElectionRowsSchema = z.array(ElectionSchema)
export const ElectionInsertSchema: z.ZodType<ElectionInsert> = z.object({
  name: z.string().min(3, 'O nome deve conter pelo menos 3 caracteres'),
  date: z
    .string()
    .date('Data Inválida')
    .refine((value) => {
      const d = new Date(value)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      d.setHours(0, 0, 0, 0)
      return d >= today
    }, 'A data não pode ser no passado'),
})
export const ElectionUpdateSchema: z.ZodType<ElectionUpdate> = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Campo obrigatório').optional(),
})
