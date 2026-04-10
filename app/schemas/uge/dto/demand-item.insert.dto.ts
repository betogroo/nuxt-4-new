import { positiveNumber } from '~/schemas/rules'
import { DemandItemSchema } from '~/schemas/uge'

export const DemandItemInsertSchema = DemandItemSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  item_order: true,
  status: true,
  deleted_at: true,
  active: true,
}).extend({
  estimated_price: positiveNumber.optional(),
  offered_price: positiveNumber.optional(),
})
