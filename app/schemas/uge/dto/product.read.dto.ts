import { ProductSchema } from '~/schemas/uge/entities'
import { ProductClassReadSchema } from '~/schemas/uge/dto'
import { z, ExpenseTypeReadSchema, ProductPackagingTypeReadRowsSchema } from '~/schemas/'

export const ProductReadSchema = ProductSchema.extend({
  product_class: ProductClassReadSchema,
  expense_types: ExpenseTypeReadSchema,
  product_packaging_types: ProductPackagingTypeReadRowsSchema,
})

export const ProductReadSelectSchema = z.array(
  ProductSchema.pick({
    id: true,
    description: true,
    specifications: true,
  }),
)
