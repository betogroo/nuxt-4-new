import { ProductSchema, ProductSpecificationSchema } from '~/schemas/uge/entities/'
import { positiveNumber } from '~/schemas/rules'

export const ProductInsertSchema = ProductSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  active: true,
}).extend({
  specifications: ProductSpecificationSchema.optional(),
  nat_gov: positiveNumber.optional(),
  pdm: positiveNumber.optional(),
})
