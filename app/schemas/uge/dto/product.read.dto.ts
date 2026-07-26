import z from 'zod'
import { uuidRule } from '~/schemas/rules'
import { ProductSchema } from '../entities/product.schema'
import { ExpenseTypeReadSchema } from './expense-type.read.dto'
import { PackagingTypeReadSchema } from './packaging-type.read.dto'
import { ProductClassReadSchema } from './product-class.read.dto'

export const ProductReadSchema = ProductSchema

export const ProductReadDetailsSchema = z
  .object({
    id: uuidRule,
    name: z.string(),
    description: z.string().optional().nullable(),
    cat_mat: z.number().optional().nullable(),
    cat_bec: z.number().optional().nullable(),
    nat_gov: z.number().optional().nullable(),
    pdm: z.number().optional().nullable(),
    specifications: z.any().optional().nullable(),
    active: z.boolean().optional().nullable(),
    class: ProductClassReadSchema.optional().nullable(),
    expense_type: ExpenseTypeReadSchema.optional().nullable(),
    packaging_types: z.array(PackagingTypeReadSchema).optional().nullable(),
  })
  .passthrough()

export const ProductReadSummarySchema = z
  .object({
    id: uuidRule,
    name: z.string(),
    description: z.string().optional().nullable(),
    specifications: z.any().optional().nullable(),
  })
  .passthrough()

export type ProductRead = z.infer<typeof ProductReadSchema>
export type ProductReadDetails = z.infer<typeof ProductReadDetailsSchema>
export type ProductReadSummary = z.infer<typeof ProductReadSummarySchema>

