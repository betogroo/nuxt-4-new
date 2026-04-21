import { z } from 'zod'
import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule, positiveNumber, uuidRule } from '~/schemas/rules'
import { ProductSpecificationSchema } from './product-specifications.schema'

export const ProductSchema = BaseEntitySchema.extend({
  product_class_id: uuidRule,
  expense_type_id: uuidRule,

  name: nameRule,
  description: z.string(),
  cat_mat: positiveNumber,
  cat_bec: positiveNumber,

  nat_gov: positiveNumber.nullable(),
  pdm: positiveNumber.nullable(),
  specifications: ProductSpecificationSchema.nullable(),
})
