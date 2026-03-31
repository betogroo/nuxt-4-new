import { ProductPackagingTypeSchema, z } from '~/schemas'

export const ProductPackagingTypeReadSchema = ProductPackagingTypeSchema.omit({
  created_at: true,
  updated_at: true,
})

export const ProductPackagingTypeReadRowsSchema = z.array(ProductPackagingTypeReadSchema)
