import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule, uuidRule } from '~/schemas/rules'

export const SpecificationValueSchema = BaseEntitySchema.extend({
  value: nameRule,
  key_id: uuidRule,
})
