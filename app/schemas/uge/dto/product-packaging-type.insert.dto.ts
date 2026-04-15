import { ProductPackagingTypeSchema } from '../entities'

export const ProductPackagingTypeInsertSchema = ProductPackagingTypeSchema.omit({
  created_at: true,
  updated_at: true,
  deleted_at: true,
})
