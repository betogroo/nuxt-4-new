import type {
  ProductSchema,
  ProductRowsSchema,
  ProductReadSchema,
  ProductSpecificationReadSchema,
  z,
  ProductSpecificationRowsSchema,
  ProductClassReadSchema,
  ProductClassRowsSchema,
} from '~/schemas'

export type Product = z.infer<typeof ProductSchema>
export type ProductRows = z.infer<typeof ProductRowsSchema>
export type ProductRead = z.infer<typeof ProductReadSchema>

export type ProductSpecificationRead = z.infer<typeof ProductSpecificationReadSchema>
export type ProductSpecificationRows = z.infer<typeof ProductSpecificationRowsSchema>

export type ProductClassRead = z.infer<typeof ProductClassReadSchema>
export type ProductClassRows = z.infer<typeof ProductClassRowsSchema>

// quando tiver relações, criar Read
