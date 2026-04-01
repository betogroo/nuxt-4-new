import { z } from '~/schemas'
import { PackagingTypeSchema } from '~/schemas/uge/entities'
import { datetimeRule, uuidRule } from '~/schemas/rules'

export const ProductPackagingTypeBaseSchema = z.object({
  product_id: uuidRule,
  packaging_type_id: uuidRule,
})

export const ProductPackagingTypeSchema = ProductPackagingTypeBaseSchema.extend({
  id: uuidRule,
  created_at: datetimeRule,
  updated_at: datetimeRule,
  packaging_types: PackagingTypeSchema,
})

export const ProductPackagingTypeRowsSchema = z.array(ProductPackagingTypeSchema)
