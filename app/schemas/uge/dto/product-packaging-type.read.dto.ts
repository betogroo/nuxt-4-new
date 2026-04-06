import z from 'zod'
import { PackagingTypeSchema, ProductPackagingTypeSchema } from '../entities'
import { PackagingTypeReadSchema } from './packaging-type.read.dto'

export const ProductPackagingTypeReadSchema = ProductPackagingTypeSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
})
  .omit({
    product_id: true,
  })
  .extend({
    packaging_types: PackagingTypeReadSchema,
  })

export const ProductPackagingTypeWithPackagingSchema = z.object({
  packaging_types: PackagingTypeSchema.pick({
    id: true,
    name: true,
    name_bec: true,
  }),
})
