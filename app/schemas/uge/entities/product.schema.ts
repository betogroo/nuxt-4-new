import { z } from 'zod'
import { BaseEntitySchema, ProductSpecificationSchema } from '~/schemas/uge/entities'
import { nameRule, positiveNumber, uuidRule } from '~/schemas/rules'

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
