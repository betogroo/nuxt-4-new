import type z from 'zod'
import { ProductPackagingTypeInsertSchema } from '../dto/product-packaging-type.insert.dto'

export const ProductPackagingTypeFormSchema = ProductPackagingTypeInsertSchema

export type ProductPackagingTypeForm = z.infer<typeof ProductPackagingTypeFormSchema>

