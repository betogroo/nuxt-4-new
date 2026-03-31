import {
  z,
  ProductSchema,
  ProductClassReadSchema,
  ExpenseTypeReadSchema,
  ProductPackagingTypeReadRowsSchema,
} from '~/schemas'

export const ProductReadSchema = ProductSchema.extend({
  product_class: ProductClassReadSchema,
  expense_types: ExpenseTypeReadSchema,
  product_packaging_types: ProductPackagingTypeReadRowsSchema,
})

export const ProductReadRowsSchema = z.array(ProductReadSchema)

export const ProductReadSelectSchema = z.array(
  ProductSchema.pick({
    id: true,
    description: true,
    specifications: true,
  }),
)
