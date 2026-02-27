import { z } from '~/schemas'
import {
  nameRule,
  futureDate,
  nameField,
  dateRule,
  positiveNumber,
  datetimeRule,
  numberSelectOption,
  uuidRule,
} from '~/schemas/rules'

export const DemandBaseSchema = z.object({
  description: nameRule,
  dispute_date: dateRule.nullable(),
  object_types_id: positiveNumber,
  electronic_process_number: z.string().nullable(),
})

export const DemandSchema = DemandBaseSchema.extend({
  id: uuidRule,
  owner_id: uuidRule,
  year: positiveNumber,
  internal_process_number: positiveNumber,
  created_at: datetimeRule,
  updated_at: datetimeRule,
})
export const DemandRowsSchema = z.array(DemandSchema)

export const DemandInsertSchema = DemandBaseSchema

export const DemandFormSchema = DemandBaseSchema.extend({
  description: nameField(6),
  object_types_id: numberSelectOption,
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
