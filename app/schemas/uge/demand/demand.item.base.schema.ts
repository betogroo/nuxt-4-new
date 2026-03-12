import { z } from '~/schemas'
import { datetimeRule, positiveNumber, uuidRule } from '~/schemas/rules'

export const DemandItemBaseSchema = z.object({
  demand_id: uuidRule,
  product_id: uuidRule,
  unity_id: uuidRule,

  quantity: positiveNumber.nullable(),
  estimated_price: positiveNumber.nullable(),
  offered_price: positiveNumber.nullable(),
  position: positiveNumber,
})

export const DemandItemSchema = DemandItemBaseSchema.extend({
  id: uuidRule,
  created_at: datetimeRule,
  updated_at: datetimeRule,
})
