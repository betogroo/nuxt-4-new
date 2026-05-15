import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule } from '~/schemas/rules'

export const SpecificationKeySchema = BaseEntitySchema.extend({
  name: nameRule,
})
