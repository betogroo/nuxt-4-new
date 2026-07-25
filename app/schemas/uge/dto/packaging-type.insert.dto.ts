import type z from 'zod'
import { PackagingTypeSchema } from '../entities/packaging-type.schema'

export const PackagingTypeInsertSchema = PackagingTypeSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
})

export type PackagingTypeInsert = z.infer<typeof PackagingTypeInsertSchema>

