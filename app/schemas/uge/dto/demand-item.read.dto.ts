import { DemandItemSchema } from '~/schemas/uge'

export const DemandItemReadSchema = DemandItemSchema.omit({
  active: true,
  deleted_at: true,
  demand_id: true,
  product_id: true,
  packaging_type_id: true,
  item_order: true,
  demand_status_id: true,
})
