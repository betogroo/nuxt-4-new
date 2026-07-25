import type z from 'zod'
import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule, positiveNumber } from '~/schemas/rules'

export const ObjectTypeSchema = BaseEntitySchema.extend({
  id: positiveNumber,
  name: nameRule,
  ptres: positiveNumber,
}).strict()

export type ObjectType = z.infer<typeof ObjectTypeSchema>

