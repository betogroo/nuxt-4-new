import { z } from '~/schemas'
import { nameRule, positiveNumber, datetimeRule, uuidRule } from '~/schemas/rules'

export const SpecificationsSchema = z.record(z.string(), z.string())

export const ProductBaseSchema = z.object({
  name: nameRule,
  description: z.string(),
  specifications: SpecificationsSchema.nullable(),
  cat_mat: positiveNumber,
  nat_gov: positiveNumber.nullable(),

  pdm: positiveNumber.nullable(),
})

export const ProductSchema = ProductBaseSchema.extend({
  id: uuidRule,
  created_at: datetimeRule,
  updated_at: datetimeRule,
  active: z.boolean(),
})

export const ProductRowsSchema = z.array(ProductSchema)
