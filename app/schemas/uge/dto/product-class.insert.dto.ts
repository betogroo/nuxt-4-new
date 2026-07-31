import type z from 'zod'
import { ProductClassSchema } from '../entities/product-class.schema'

export const ProductClassInsertSchema = ProductClassSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
})

export type ProductClassInsert = z.infer<typeof ProductClassInsertSchema>
