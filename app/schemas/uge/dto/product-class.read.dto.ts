import { ProductClassSchema } from '~/schemas/uge/entities'

export const ProductClassReadSchema = ProductClassSchema.omit({
  created_at: true,
  updated_at: true,
})
