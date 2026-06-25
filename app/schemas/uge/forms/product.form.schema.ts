import { nameField } from '~/schemas/rules/name.rules'
import { ProductInsertSchema } from '../dto/product.insert.dto'
import { positiveNumber } from '~/schemas/rules/number.rules'
import { uuidSelectOption } from '~/schemas/rules/uuid.rules'

export const ProductFormSchema = ProductInsertSchema.extend({
  name: nameField(6),
  description: nameField(6),
  cat_mat: positiveNumber,
  product_class_id: uuidSelectOption,
  expense_type_id: uuidSelectOption,
})
