import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { positiveNumber, uuidRule } from '~/schemas/rules'

export const DemandItemSchema = BaseEntitySchema.extend({
  demand_id: uuidRule,
  product_id: uuidRule,
  packaging_type_id: uuidRule,
  quantity: positiveNumber,

  estimated_price: positiveNumber.nullable(),
  offered_price: positiveNumber.nullable(),

  item_order: positiveNumber,
  demand_status_id: uuidRule,
}).strict()
