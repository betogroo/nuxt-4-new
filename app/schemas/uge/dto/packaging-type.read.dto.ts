import { PackagingTypeSchema } from '~/schemas/uge/entities'

export const PackagingTypeReadSchema = PackagingTypeSchema.omit({
  created_at: true,
  updated_at: true,
})
