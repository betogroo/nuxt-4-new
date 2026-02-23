import { z } from '~/schemas'
import { nameRule, positiveNumber } from '~/schemas/rules'

export const ObjectTypeBaseSchema = z.object({
  name: nameRule,
  ptres: positiveNumber,
})

export const ObjectTypeSchema = ObjectTypeBaseSchema.extend({
  id: positiveNumber,
})

export const ObjectTypeRowsSchema = z.array(ObjectTypeSchema)

export const ObjectTypeInsertSchema = ObjectTypeBaseSchema
