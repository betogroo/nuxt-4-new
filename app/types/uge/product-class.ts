import type z from 'zod'
import type { ProductClassSchema } from '~/schemas/uge/entities/product-class.schema'
import type {
  ProductClassReadSchema,
  ProductClassReadSummarySchema,
} from '~/schemas/uge/dto/product-class.read.dto'

export type ProductClass = z.infer<typeof ProductClassSchema>
export type ProductClassRead = z.infer<typeof ProductClassReadSchema>
export type ProductClassReadSummary = z.infer<typeof ProductClassReadSummarySchema>
