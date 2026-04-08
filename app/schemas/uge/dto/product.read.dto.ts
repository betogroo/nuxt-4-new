import { ProductSchema } from '~/schemas/uge/entities'
import { ExpenseTypeReadSchema, ProductClassReadSchema } from '~/schemas/uge/dto'
import { z } from '~/schemas/'

export const ProductReadSchema = ProductSchema

export const ProductReadDetailsSchema = ProductReadSchema.pick({
  id: true,
  name: true,
  description: true,
  cat_mat: true,
  cat_bec: true,
  nat_gov: true,
  pdm: true,
  specifications: true,
  active: true,
}).extend({
  class: ProductClassReadSchema,
  expense_type: ExpenseTypeReadSchema,
})

export const ProductReadSummarySchema = z.array(
  ProductSchema.pick({
    id: true,
    description: true,
    specifications: true,
  }),
)
