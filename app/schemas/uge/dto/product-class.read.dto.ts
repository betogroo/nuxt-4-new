import { ProductClassSchema } from '~/schemas/uge/entities'

export const ProductClassReadSchema = ProductClassSchema.pick({
  name: true,
  code: true,
})

export const ProductClassReadSummarySchema = ProductClassSchema.omit({
  created_at: true,
  updated_at: true,
})
