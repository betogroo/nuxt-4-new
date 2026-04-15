import { PackagingTypeSchema } from '~/schemas/uge/entities'

export const PackagingTypeInsertSchema = PackagingTypeSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
})
