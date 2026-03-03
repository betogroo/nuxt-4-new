import { DemandBaseSchema } from '~/schemas'
import { futureDate, nameField, numberSelectOption } from '~/schemas/rules'

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
