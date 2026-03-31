import type {
  //ProductSchema,
  //ProductRowsSchema,
  //ProductReadSchema,

  ProductSpecificationReadSchema,
  z,
  ProductSpecificationRowsSchema,
  //ProductFormSchema,
  //ProductInsertSchema,
  ProductPackagingTypeSchema,
} from '~/schemas'
import type {
  ProductFormSchema,
  ProductInsertSchema,
  ProductReadSchema,
  ProductSchema,
  ProductReadSelectSchema,
} from '~/schemas/'

//export type ProductRows = z.infer<typeof ProductRowsSchema>

export type ProductSpecificationRead = z.infer<typeof ProductSpecificationReadSchema>
export type ProductSpecificationRows = z.infer<typeof ProductSpecificationRowsSchema>

/* export type ProductClassRead = z.infer<typeof ProductClassReadSchema>
export type ProductClass = z.infer<typeof ProductClassSchema>
export type ProductClassRows = z.infer<typeof ProductClassRowsSchema> */

export type ProductPackagingType = z.infer<typeof ProductPackagingTypeSchema>

// a partir daqui novos
export type Product = z.infer<typeof ProductSchema>
export type ProductForm = z.infer<typeof ProductFormSchema>
export type ProductInsert = z.infer<typeof ProductInsertSchema>
export type ProductRead = z.infer<typeof ProductReadSchema>
export type ProductReadSelect = z.infer<typeof ProductReadSelectSchema>

// quando tiver relações, criar Read
