import { positiveNumber } from '~/schemas/rules/number.rules'
import { ProductSpecificationSchema } from '../entities/product-specifications.schema'
import { ProductSchema } from '../entities/product.schema'

export const ProductInsertSchema = ProductSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  active: true,
  deleted_at: true,
}).extend({
  specifications: ProductSpecificationSchema.optional(),
  nat_gov: positiveNumber.optional(),
  pdm: positiveNumber.optional(),
})
