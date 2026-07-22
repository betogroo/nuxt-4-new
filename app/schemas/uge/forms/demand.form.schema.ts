import z from 'zod'
import { nameField } from '~/schemas/rules/name.rules'

import { futureDate } from '~/schemas/rules/date.rules'
import { DemandSchema } from '../entities/demand.schema'
import { numberSelectOption } from '~/schemas/rules/form-select.rules'

export const DemandFormSchema = z.object({
  description: nameField(6),
  electronic_process_number: DemandSchema.shape.electronic_process_number.optional(),
  object_types_id: numberSelectOption,
  dispute_date: futureDate.optional(),
})
export type DemandForm = z.infer<typeof DemandFormSchema>
