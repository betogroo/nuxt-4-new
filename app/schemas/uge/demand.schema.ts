import { z } from '~/schemas'
import { nameRule, futureDate, nameField } from '~/schemas/rules'

export const DemandBaseSchema = z.object({
  description: nameRule,
  dispute_date: z.string().date().nullable(),
  object_types_id: z.number().positive(),
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
  description: nameField(2),
  object_types_id: z.number({ required_error: REQUIRED_SELECT_FIELD }).positive(),
  dispute_date: futureDate.optional(),
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
