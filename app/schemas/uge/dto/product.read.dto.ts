import { ProductSchema } from '~/schemas/uge/entities'
import { ProductClassReadSchema } from '~/schemas/uge/dto'
import { z } from '~/schemas/'

export const ProductReadSchema = ProductSchema

export const ProductSummarySchema = ProductReadSchema.pick({
  name: true,
  description: true,
}).extend({
  class: ProductClassReadSchema,
})

/* export const ProductReadSchema = ProductSchema.extend({
  product_class: ProductClassReadSchema,
  expense_types: ExpenseTypeReadSchema,
  product_packaging_types: z.array(ProductPackagingTypeWithPackagingSchema),
}) */

export const ProductReadSelectSchema = z.array(
  ProductSchema.pick({
    id: true,
    description: true,
    specifications: true,
  }),
)
