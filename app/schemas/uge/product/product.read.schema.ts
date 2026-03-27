import { z, ProductSchema, ProductClassReadSchema, ExpenseTypeReadSchema } from '~/schemas'

export const ProductReadSchema = ProductSchema.extend({
  product_class: ProductClassReadSchema,
  expense_types: ExpenseTypeReadSchema,
})

export const ProductReadRowsSchema = z.array(ProductReadSchema)

export const ProductReadSelectSchema = z.array(
  ProductSchema.pick({
    id: true,
    description: true,
    specifications: true,
  }),
)
