import { ProductClassSchema } from '~/schemas'

export const ProductClassReadSchema = ProductClassSchema.omit({
  created_at: true,
  updated_at: true,
})
