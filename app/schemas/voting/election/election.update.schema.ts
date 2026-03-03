import { z } from '~/schemas'
import type { ElectionUpdate } from '~/types'

export const ElectionUpdateSchema: z.ZodType<ElectionUpdate> = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Campo obrigatório').optional(),
})
