import { BaseEntitySchema } from '~/schemas/uge/entities'
import { nameRule, positiveNumber } from '~/schemas/rules'

export const ObjectTypeSchema = BaseEntitySchema.extend({
  id: positiveNumber,
  name: nameRule,
  ptres: positiveNumber,
}).strict()
