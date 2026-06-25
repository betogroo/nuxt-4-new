import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule } from '~/schemas/rules'

export const PackagingTypeSchema = BaseEntitySchema.extend({
  name: nameRule,
  name_bec: nameRule,
}).strict()
