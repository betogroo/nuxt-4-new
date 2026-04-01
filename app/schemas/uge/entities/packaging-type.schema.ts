import { BaseEntitySchema } from '~/schemas/uge/entities'
import { nameRule } from '~/schemas/rules'

export const PackagingTypeSchema = BaseEntitySchema.extend({
  name: nameRule,
  name_bec: nameRule,
}).strict()
