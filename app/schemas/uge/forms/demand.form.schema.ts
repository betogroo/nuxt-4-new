import { nameField } from '~/schemas/rules/name.rules'
import { DemandInsertSchema } from '../dto/demand.insert.dto'
import { numberSelectOption } from '~/schemas/rules/number.rules'
import { futureDate } from '~/schemas/rules/date.rules'
import { DemandSchema } from '../entities/demand.schema'

export const DemandFormSchema = DemandInsertSchema.extend({
  description: nameField(6),
  object_types_id: numberSelectOption,
  dispute_date: futureDate.optional(),
  electronic_process_number: DemandSchema.shape.electronic_process_number.optional(),
})
