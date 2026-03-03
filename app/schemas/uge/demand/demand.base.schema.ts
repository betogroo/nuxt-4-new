import { z } from '~/schemas'
import { nameRule, dateRule, positiveNumber, datetimeRule, uuidRule } from '~/schemas/rules'

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

//versão curta
/* export const DemandFormSchema = DemandBaseSchema.partial({
  dispute_date: true,
  electronic_process_number: true,
}) */
