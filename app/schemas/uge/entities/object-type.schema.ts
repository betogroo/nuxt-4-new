import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule, positiveNumber } from '~/schemas/rules'

export const ObjectTypeSchema = BaseEntitySchema.extend({
  id: positiveNumber,
  name: nameRule,
  ptres: positiveNumber,
}).strict()
