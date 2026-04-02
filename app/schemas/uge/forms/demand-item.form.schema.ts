import { positiveNumber, uuidSelectOption } from '~/schemas/rules'
import { DemandItemInsertSchema } from '~/schemas/uge'

export const DemandItemFormSchema = DemandItemInsertSchema.omit({
  demand_id: true,
}).extend({
  product_id: uuidSelectOption,
  packaging_type_id: uuidSelectOption,
  quantity: positiveNumber,
  estimated_price: positiveNumber.optional(),
  offered_price: positiveNumber.optional(),
})
