import type { z } from '~/schemas'
import type { ProductClassSchema } from '~/schemas/uge/entities/product-class.schema'

export type ProductClass = z.infer<typeof ProductClassSchema>
