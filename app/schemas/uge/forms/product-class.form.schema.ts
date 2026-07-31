import type z from 'zod'
import { ProductClassInsertSchema } from '../dto/product-class.insert.dto'

export const ProductClassFormSchema = ProductClassInsertSchema

export type ProductClassForm = z.infer<typeof ProductClassFormSchema>
