import z from 'zod'
import { uuidRule } from '~/schemas/rules'
import { ProductClassSchema } from '../entities/product-class.schema'

export const ProductClassReadSchema = ProductClassSchema.pick({
  name: true,
  code: true,
})
  .extend({
    id: uuidRule.optional().nullable(),
  })
  .partial()

export const ProductClassReadSummarySchema = ProductClassSchema.omit({
  created_at: true,
  updated_at: true,
})

export type ProductClassRead = z.infer<typeof ProductClassReadSchema>
export type ProductClassReadSummary = z.infer<typeof ProductClassReadSummarySchema>
