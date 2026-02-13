import { z } from '~/schemas'

export const DemandSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime({ offset: true }),
  updated_at: z.string().datetime({ offset: true }),
  description: z.string().min(1, 'Campo obrigatório'),
  dispute_date: z.string().date().nullable(),
  internal_process_number: z.number(),
  object_types_id: z.number(),
  electronic_process_number: z.string().nullable(),
})

export const DemandRowsSchema = z.array(DemandSchema)

export const DemandInsertSchema = DemandSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
})

export const DemandFormSchema = DemandInsertSchema.extend({
  dispute_date: z.string().date().nullable().optional(),
  electronic_process_number: z.string().nullable().optional(),
})
