import { ProductPackagingTypeSchema } from '../entities/product-packaging-type.schema'

export const ProductPackagingTypeInsertSchema = ProductPackagingTypeSchema.omit({
  created_at: true,
  updated_at: true,
  deleted_at: true,
})
