import { z } from '~/schemas'
import type { ObjectType } from '~/types'

export const ObjectTypeSchema: z.ZodType<ObjectType> = z.object({
  id: z.number(),
  created_at: z.string().datetime({ offset: true }),
  name: z.string(),
  ptres: z.number(),
})
