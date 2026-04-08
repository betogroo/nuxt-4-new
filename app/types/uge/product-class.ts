import type { z } from '~/schemas'
import type { ProductClassSchema } from '~/schemas/uge/entities/product-class.schema'
import type {
  ProductClassReadSchema,
  ProductClassReadSelectSchema,
} from '~/schemas/uge/dto/product-class.read.dto'

export type ProductClass = z.infer<typeof ProductClassSchema>
export type ProductClassRead = z.infer<typeof ProductClassReadSchema>
export type ProductClassReadSelect = z.infer<typeof ProductClassReadSelectSchema>
