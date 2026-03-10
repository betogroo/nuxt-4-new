import { z } from '~/schemas'
import { uuidRule, nameRule, positiveNumber, datetimeRule } from '~/schemas/rules'

export const ProductClassBaseSchema = z.object({
  name: nameRule,
  code: positiveNumber,
})

export const ProductClassSchema = ProductClassBaseSchema.extend({
  id: uuidRule,
  created_at: datetimeRule,
  updated_at: datetimeRule,
})

export const ProductClassRowsSchema = z.array(ProductClassSchema)
