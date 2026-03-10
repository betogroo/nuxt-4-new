import { z, ProductSchema, ProductClassSchema } from '~/schemas'

export const ProductReadSchema = ProductSchema.extend({
  product_class: ProductClassSchema,
})

export const ProductReadRowsSchema = z.array(ProductReadSchema)
