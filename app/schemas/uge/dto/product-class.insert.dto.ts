import { ProductClassSchema } from '~/schemas/uge/entities/product-class.schema'

export const ProductClassInsertSchema = ProductClassSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
})
