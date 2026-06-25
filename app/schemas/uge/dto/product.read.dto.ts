import z from 'zod'
import { ProductSchema } from '../entities/product.schema'
import { ExpenseTypeReadSchema } from './expense-type.read.dto'
import { PackagingTypeReadSchema } from './packaging-type.read.dto'
import { ProductClassReadSchema } from './product-class.read.dto'

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
  packaging_types: z.array(PackagingTypeReadSchema),
})

export const ProductReadSummarySchema = ProductSchema.pick({
  id: true,
  name: true,
  description: true,
  specifications: true,
})
