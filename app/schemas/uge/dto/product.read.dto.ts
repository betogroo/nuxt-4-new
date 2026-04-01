import { ProductSchema, ProductPackagingTypeSchema } from '~/schemas/uge/entities'
import { ProductClassReadSchema, ExpenseTypeReadSchema } from '~/schemas/uge/dto'
import { z } from '~/schemas/'

export const ProductReadSchema = ProductSchema.extend({
  product_class: ProductClassReadSchema,
  expense_types: ExpenseTypeReadSchema,
  product_packaging_types: z.array(ProductPackagingTypeSchema),
})

export const ProductReadSelectSchema = z.array(
  ProductSchema.pick({
    id: true,
    description: true,
    specifications: true,
  }),
)
