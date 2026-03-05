import { z } from '~/schemas'
import { nameRule, datetimeRule, uuidRule } from '~/schemas/rules'

export const ProductSpecificationBaseSchema = z.object({
  name: nameRule,
})

export const ProductSpecificationSchema = ProductSpecificationBaseSchema.extend({
  id: uuidRule,
  created_at: datetimeRule,
  updated_at: datetimeRule,
})

export const ProductSpecificationRowsSchema = z.array(ProductSpecificationSchema)
