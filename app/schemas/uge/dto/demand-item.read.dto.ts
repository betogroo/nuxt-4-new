import {
  DemandItemSchema,
  DemandStatusSchema,
  PackagingTypeSchema,
  ProductReadSummarySchema,
} from '~/schemas/uge'

const packaging = PackagingTypeSchema.pick({
  name: true,
})

const product = ProductReadSummarySchema
const status = DemandStatusSchema.pick({
  id: true,
  name: true,
  code: true,
  color: true,
})

export const DemandItemReadSchema = DemandItemSchema.omit({
  active: true,
  deleted_at: true,
  demand_id: true,
  product_id: true,
  packaging_type_id: true,
  item_order: true,
  demand_status_id: true,
}).extend({
  product,
  packaging,
  status,
})
