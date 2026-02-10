import { z } from '~/schemas'
import type { Demand } from '~/types'

export const DemandSchema: z.ZodType<Demand> = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime({ offset: true }),
  updated_at: z.string().datetime({ offset: true }),
  description: z.string(),
  dispute_date: z.string().date().nullable(),
  internal_process_number: z.number(),
  object_types_id: z.number(),
  electronic_process_number: z.string(),
})

export const DemandRowsSchema = z.array(DemandSchema)
