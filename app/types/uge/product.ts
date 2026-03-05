import type { ProductSchema, ProductRowsSchema, ProductReadSchema, z } from '~/schemas'

export type Product = z.infer<typeof ProductSchema>
export type ProductRows = z.infer<typeof ProductRowsSchema>
export type ProductRead = z.infer<typeof ProductReadSchema>

// quando tiver relações, criar Read
