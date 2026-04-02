import { futureDate, nameField, numberSelectOption } from '~/schemas/rules'
import { DemandInsertSchema, DemandSchema } from '~/schemas/uge'

export const DemandFormSchema = DemandInsertSchema.extend({
  description: nameField(6),
  object_types_id: numberSelectOption,
  dispute_date: futureDate.optional(),
  electronic_process_number: DemandSchema.shape.electronic_process_number.optional(),
})
