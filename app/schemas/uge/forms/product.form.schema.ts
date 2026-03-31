import { ProductInsertSchema } from '~/schemas/uge/dto'
import { nameField, positiveNumber, uuidSelectOption } from '~/schemas/rules'

export const ProductFormSchema = ProductInsertSchema.extend({
  name: nameField(6),
  description: nameField(6),
  cat_mat: positiveNumber,
  product_class_id: uuidSelectOption,
  expense_type_id: uuidSelectOption,
})
