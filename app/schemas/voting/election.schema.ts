import { z } from '~/schemas'
import type { Election, ElectionInsert, ElectionUpdate } from '~/types'

export const ElectionSchema: z.ZodType<Election> = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Campo obrigatório'),
  created_at: z.string(),
})
export const ElectionInsertSchema: z.ZodType<ElectionInsert> = z.object({
  name: z.string().min(3, 'O nome deve conter pelo menos 3 caracteres'),
})
export const ElectionUpdateSchema: z.ZodType<ElectionUpdate> = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Campo obrigatório').optional(),
  created_at: z.string().optional(),
})
