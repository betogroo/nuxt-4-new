import type { z } from 'zod'
import type {
  ProductPackagingTypeReadSchema,
  ProductPackagingTypeWithPackagingSchema,
} from '~/schemas/uge/dto/product-packaging-type.read.dto'
import type { ProductPackagingTypeSchema } from '~/schemas/uge/entities/product-packaging-type.schema'

export type ProductPackagingType = z.infer<typeof ProductPackagingTypeSchema>
export type ProductPackagingTypeRead = z.infer<typeof ProductPackagingTypeReadSchema>
export type ProductPackagingTypeWithPackaging = z.infer<
  typeof ProductPackagingTypeWithPackagingSchema
>
