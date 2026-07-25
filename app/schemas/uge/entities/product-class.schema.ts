import type z from 'zod'
import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule, positiveNumber } from '~/schemas/rules'

export const ProductClassSchema = BaseEntitySchema.extend({
  name: nameRule,
  code: positiveNumber,
})

export type ProductClass = z.infer<typeof ProductClassSchema>

