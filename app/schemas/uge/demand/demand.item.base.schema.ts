import { z } from '~/schemas'
import { datetimeRule, positiveNumber, uuidRule } from '~/schemas/rules'

export const DemandItemBaseSchema = z.object({
  demand_id: uuidRule,
  product_id: uuidRule,
  packaging_type_id: uuidRule,

  quantity: positiveNumber.nullable(),
  estimated_price: positiveNumber.nullable(),
  offered_price: positiveNumber.nullable(),
  item_order: positiveNumber,
  status: z.string(),
})

export const DemandItemSchema = DemandItemBaseSchema.extend({
  id: uuidRule,
  created_at: datetimeRule,
  updated_at: datetimeRule,
})
