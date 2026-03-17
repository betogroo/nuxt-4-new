import { z } from '~/schemas'
import { nameRule, datetimeRule, uuidRule } from '~/schemas/rules'

export const PackagingTypeBaseSchema = z.object({
  name: nameRule,
  name_bec: nameRule,
})

export const PackagingTypeSchema = PackagingTypeBaseSchema.extend({
  id: uuidRule,
  created_at: datetimeRule,
  updated_at: datetimeRule,
})

export const PackagingTypeRowsSchema = z.array(PackagingTypeSchema)
