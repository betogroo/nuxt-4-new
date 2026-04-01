import { BaseEntitySchema } from '~/schemas/uge/entities'
import { uuidRule } from '~/schemas/rules'

export const ProductPackagingTypeSchema = BaseEntitySchema.extend({
  product_id: uuidRule,
  packaging_type_id: uuidRule,
}).strict()
