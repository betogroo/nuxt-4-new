import { z, ProductSchema, ProductClassSchema, ExpenseTypeSchema } from '~/schemas'

export const ProductReadSchema = ProductSchema.extend({
  product_class: ProductClassSchema,
  expense_types: ExpenseTypeSchema,
})

export const ProductReadRowsSchema = z.array(ProductReadSchema)
