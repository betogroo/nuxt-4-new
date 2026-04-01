import { ProductSchema } from '~/schemas/uge/entities'
import {
  ProductClassReadSchema,
  ExpenseTypeReadSchema,
  ProductPackagingTypeReadSchema,
} from '~/schemas/uge/dto'
import { z } from '~/schemas/'

export const ProductReadSchema = ProductSchema.extend({
  product_class: ProductClassReadSchema,
  expense_types: ExpenseTypeReadSchema,
  product_packaging_types: z.array(ProductPackagingTypeReadSchema),
})

export const ProductReadSelectSchema = z.array(
  ProductSchema.pick({
    id: true,
    description: true,
    specifications: true,
  }),
)
