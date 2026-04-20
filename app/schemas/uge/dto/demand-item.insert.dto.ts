import { positiveNumber } from '~/schemas/rules'
import { DemandItemSchema } from '~/schemas/uge/entities/demand-item.schema'

export const DemandItemInsertSchema = DemandItemSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
  item_order: true,
  demand_status_id: true,
  active: true,
}).extend({
  estimated_price: positiveNumber.optional(),
  offered_price: positiveNumber.optional(),
})
