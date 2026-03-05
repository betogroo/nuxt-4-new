import { z, ProductSchema } from '~/schemas'

export const ProductReadSchema = ProductSchema

export const ProductReadRowsSchema = z.array(ProductReadSchema)
