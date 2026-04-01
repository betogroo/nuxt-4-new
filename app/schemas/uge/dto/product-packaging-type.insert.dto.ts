import { ProductPackagingTypeSchema } from '../entities'

export const ProductPackagingTypeInsertSchema = ProductPackagingTypeSchema.omit({
  created_at: true,
  updated_at: true,
})
