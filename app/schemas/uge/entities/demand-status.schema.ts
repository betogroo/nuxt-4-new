import { z } from 'zod'
import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule, positiveNumber } from '~/schemas/rules'

export const DemandStatusSchema = BaseEntitySchema.extend({
  code: nameRule,
  name: nameRule,
  color: nameRule.nullable(),
  sort_order: positiveNumber,
  is_initial: z.boolean(),
  is_final: z.boolean(),
  allow_cancel: z.boolean(),
  is_demand_active: z.boolean(),
})
