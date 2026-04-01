import { ProductPackagingTypeSchema } from '../entities'

export const ProductPackagingTypeReadSchema = ProductPackagingTypeSchema.omit({
  created_at: true,
  updated_at: true,
})
