import { z } from '~/schemas'

export const DemandBaseSchema = z.object({
  description: z.string().min(1),
  dispute_date: z.string().date().nullable(),
  // year: z.number().int(),
  // internal_process_number: z.number().positive(),
  object_types_id: z.number().min(1),
  electronic_process_number: z.string().min(1).nullable(),
})

export const DemandSchema = DemandBaseSchema.extend({
  id: z.string().uuid(),
  year: z.number().int(),
  internal_process_number: z.number().positive(),
  created_at: z.string().datetime({ offset: true }),
  updated_at: z.string().datetime({ offset: true }),
})
export const DemandRowsSchema = z.array(DemandSchema)

export const DemandInsertSchema = DemandBaseSchema

export const DemandFormSchema = DemandBaseSchema.extend({
  dispute_date: DemandBaseSchema.shape.dispute_date.optional(),
  electronic_process_number: DemandBaseSchema.shape.electronic_process_number.optional(),
})

export const DemandInsertFromFormSchema = DemandFormSchema.transform((data) => ({
  ...data,
  dispute_date: data.dispute_date ?? null,
  electronic_process_number: data.electronic_process_number ?? null,
})).pipe(DemandInsertSchema)

//versão curta
/* export const DemandFormSchema = DemandBaseSchema.partial({
  dispute_date: true,
  electronic_process_number: true,
}) */
