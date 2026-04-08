import type { z } from 'zod'
import type {
  ProductFormSchema,
  ProductInsertSchema,
  ProductReadSchema,
  ProductSchema,
  ProductReadSelectSchema,
  ProductSpecificationSchema,
  ProductSummarySchema,
} from '~/schemas/uge'
//import type { ProductPackagingTypeSchema } from '~/schemas/uge/entities'

//export type ProductRows = z.infer<typeof ProductRowsSchema>

// export type ProductSpecificationRows = z.infer<typeof ProductSpecificationRowsSchema>

/* export type ProductClassRead = z.infer<typeof ProductClassReadSchema>
export type ProductClass = z.infer<typeof ProductClassSchema>
export type ProductClassRows = z.infer<typeof ProductClassRowsSchema> */

// a partir daqui novos
export type ProductSpecification = z.infer<typeof ProductSpecificationSchema>

export type ProductRead = z.infer<typeof ProductReadSchema>
export type ProductReadSelect = z.infer<typeof ProductReadSelectSchema>
export type ProductInsert = z.infer<typeof ProductInsertSchema>
export type ProductForm = z.infer<typeof ProductFormSchema>
export type Product = z.infer<typeof ProductSchema>

// quando tiver relações, criar Read
export type ProductSummary = z.infer<typeof ProductSummarySchema>
