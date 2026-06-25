import { ObjectTypeSchema } from '../entities/object-type.schema'

export const ObjectTypeReadSchema = ObjectTypeSchema.pick({
  name: true,
  ptres: true,
})

export const ObjectTypeReadSummarySchema = ObjectTypeSchema.omit({
  created_at: true,
  updated_at: true,
  active: true,
  deleted_at: true,
})
