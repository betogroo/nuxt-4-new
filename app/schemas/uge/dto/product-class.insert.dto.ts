import { ProductClassSchema } from '~/schemas/uge/entities'

export const ProductClassInsertSchema = ProductClassSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
})
