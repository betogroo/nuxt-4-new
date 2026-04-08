import { ProductSchema } from '~/schemas/uge/entities'
import { ProductClassReadSchema } from '~/schemas/uge/dto'
import { z } from '~/schemas/'

export const ProductReadSchema = ProductSchema

export const ProductReadDetailsSchema = ProductReadSchema.pick({
  id: true,
  name: true,
  description: true,
}).extend({
  class: ProductClassReadSchema,
})

export const ProductReadSummarySchema = z.array(
  ProductSchema.pick({
    id: true,
    description: true,
    specifications: true,
  }),
)
