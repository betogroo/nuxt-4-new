import { z } from 'zod'
import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { dateRule, nameRule, positiveNumber, uuidRule } from '~/schemas/rules'

export const DemandSchema = BaseEntitySchema.extend({
  description: nameRule,
  electronic_process_number: z.string().nullable(),
  internal_process_number: positiveNumber,
  year: positiveNumber,
  owner_id: uuidRule,
  dispute_date: dateRule.nullable(),
  object_types_id: positiveNumber,
}).strict()
