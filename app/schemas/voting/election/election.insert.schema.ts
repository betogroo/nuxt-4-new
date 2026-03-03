import { z } from '~/schemas'
import type { ElectionInsert } from '~/types'

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
