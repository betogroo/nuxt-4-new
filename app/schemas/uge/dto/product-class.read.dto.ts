import { ProductClassSchema } from '../entities/product-class.schema'

export const ProductClassReadSchema = ProductClassSchema.pick({
  name: true,
  code: true,
})

export const ProductClassReadSummarySchema = ProductClassSchema.omit({
  created_at: true,
  updated_at: true,
})
