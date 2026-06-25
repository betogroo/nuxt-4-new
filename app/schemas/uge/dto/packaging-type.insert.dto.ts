import { PackagingTypeSchema } from '../entities/packaging-type.schema'

export const PackagingTypeInsertSchema = PackagingTypeSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
})
