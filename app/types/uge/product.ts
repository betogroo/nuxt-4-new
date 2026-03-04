import type { ProductSchema, ProductRowsSchema, z } from '~/schemas'

export type Product = z.infer<typeof ProductSchema>
export type ProductRows = z.infer<typeof ProductRowsSchema>

// quando tiver relações, criar Read
