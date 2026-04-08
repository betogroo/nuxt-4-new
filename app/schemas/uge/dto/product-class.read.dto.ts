import { ProductClassSchema } from '~/schemas/uge/entities'

export const ProductClassReadSchema = ProductClassSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
})

export const ProductClassReadSummarySchema = ProductClassSchema.omit({
  created_at: true,
  updated_at: true,
})
