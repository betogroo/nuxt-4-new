import { z } from '~/schemas'
import { nameRule, datetimeRule, uuidRule } from '~/schemas/rules'

export const UnityBaseSchema = z.object({
  name: nameRule,
  name_bec: nameRule,
})

export const UnitySchema = UnityBaseSchema.extend({
  id: uuidRule,
  created_at: datetimeRule,
  updated_at: datetimeRule,
})

export const UnityRowsSchema = z.array(UnitySchema)
