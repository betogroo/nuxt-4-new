import z from 'zod'
import { uuidSelectOption } from '~/schemas/rules/uuid.rules'
import { positiveNumber } from '~/schemas/rules/number.rules'

export const DemandItemFormSchema = z.object({
  product_id: uuidSelectOption,
  packaging_type_id: uuidSelectOption,
  quantity: positiveNumber,
  estimated_price: positiveNumber.optional(),
  offered_price: positiveNumber.optional(),
})
export type DemandItemForm = z.infer<typeof DemandItemFormSchema>
