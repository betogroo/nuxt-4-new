import type { z } from 'zod'
import type { ProductInsertSchema } from '~/schemas/uge/dto/product.insert.dto'
import type {
  ProductReadDetailsSchema,
  ProductReadSchema,
  ProductReadSummarySchema,
} from '~/schemas/uge/dto/product.read.dto'
import type { ProductSpecificationSchema } from '~/schemas/uge/entities/product-specifications.schema'
import type { ProductSchema } from '~/schemas/uge/entities/product.schema'
import type { ProductFormSchema } from '~/schemas/uge/forms/product.form.schema'

export type ProductSpecification = z.infer<typeof ProductSpecificationSchema>

export type ProductRead = z.infer<typeof ProductReadSchema>
export type ProductReadSummary = z.infer<typeof ProductReadSummarySchema>
export type ProductInsert = z.infer<typeof ProductInsertSchema>
export type ProductForm = z.infer<typeof ProductFormSchema>
export type Product = z.infer<typeof ProductSchema>

// quando tiver relações, criar Read
export type ProductReadDetails = z.infer<typeof ProductReadDetailsSchema>
