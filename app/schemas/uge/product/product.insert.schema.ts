import { ProductBaseSchema, SpecificationsSchema } from '~/schemas'
import { nameField, positiveNumber, uuidSelectOption } from '~/schemas/rules'

export const ProductInsertSchema = ProductBaseSchema.extend({
  specifications: SpecificationsSchema.optional(),
  nat_gov: positiveNumber.optional(),
  pdm: positiveNumber.optional(),
  product_class_id: uuidSelectOption,
  expense_type_id: uuidSelectOption,
})

export const ProductFormSchema = ProductBaseSchema.extend({
  name: nameField(6),
  description: nameField(6),
  product_class_id: uuidSelectOption,
  expense_type_id: uuidSelectOption,
  specifications: SpecificationsSchema.optional(),
  cat_mat: positiveNumber,
  nat_gov: positiveNumber.optional(),
  pdm: positiveNumber.optional(),
})
