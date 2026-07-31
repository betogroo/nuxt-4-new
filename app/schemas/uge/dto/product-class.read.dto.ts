import type z from 'zod'
import { ProductClassSchema } from '../entities/product-class.schema'

export const ProductClassReadSchema = ProductClassSchema.pick({
  id: true,
  name: true,
  code: true,
}).partial()

export const ProductClassReadSummarySchema = ProductClassSchema.omit({
  created_at: true,
  updated_at: true,
  active: true,
  deleted_at: true,
})

export type ProductClassRead = z.infer<typeof ProductClassReadSchema>
export type ProductClassReadSummary = z.infer<typeof ProductClassReadSummarySchema>
