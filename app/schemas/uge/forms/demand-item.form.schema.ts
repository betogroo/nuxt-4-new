import { uuidSelectOption } from '~/schemas/rules/uuid.rules'
import { DemandItemInsertSchema } from '../dto/demand-item.insert.dto'
import { positiveNumber } from '~/schemas/rules/number.rules'

export const DemandItemFormSchema = DemandItemInsertSchema.omit({
  demand_id: true,
}).extend({
  product_id: uuidSelectOption,
  packaging_type_id: uuidSelectOption,
  quantity: positiveNumber,
  estimated_price: positiveNumber.optional(),
  offered_price: positiveNumber.optional(),
})
