import type z from 'zod'
import { PackagingTypeSchema } from '../entities/packaging-type.schema'

export const PackagingTypeReadSchema = PackagingTypeSchema.omit({
  created_at: true,
  updated_at: true,
  active: true,
  deleted_at: true,
})

export type PackagingTypeRead = z.infer<typeof PackagingTypeReadSchema>

