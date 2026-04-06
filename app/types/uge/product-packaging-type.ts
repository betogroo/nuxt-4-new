import type { z } from 'zod'
import type {
  ProductPackagingTypeReadSchema,
  ProductPackagingTypeSchema,
  ProductPackagingTypeWithPackagingSchema,
} from '~/schemas/uge'

export type ProductPackagingType = z.infer<typeof ProductPackagingTypeSchema>
export type ProductPackagingTypeRead = z.infer<typeof ProductPackagingTypeReadSchema>
export type ProductPackagingTypeWithPackaging = z.infer<
  typeof ProductPackagingTypeWithPackagingSchema
>
