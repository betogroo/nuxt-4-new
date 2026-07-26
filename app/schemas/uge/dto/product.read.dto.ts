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
  class: ProductClassReadSchema.optional().nullable(),
  expense_type: ExpenseTypeReadSchema.optional().nullable(),
  packaging_types: z.array(PackagingTypeReadSchema).optional().nullable(),
})

export const ProductReadSummarySchema = ProductSchema.pick({
  id: true,
  name: true,
  description: true,
  specifications: true,
})

export type ProductRead = z.infer<typeof ProductReadSchema>
export type ProductReadDetails = z.infer<typeof ProductReadDetailsSchema>
export type ProductReadSummary = z.infer<typeof ProductReadSummarySchema>

