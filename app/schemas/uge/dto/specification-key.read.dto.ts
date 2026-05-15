import { SpecificationKeySchema } from '../entities/specification-key.schema'

export const SpecificationKeyReadSchema = SpecificationKeySchema.omit({
  created_at: true,
  updated_at: true,
  active: true,
  deleted_at: true,
})
