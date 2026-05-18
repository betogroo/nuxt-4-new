import { SpecificationValueSchema } from '../entities/specification-value.schema'
import { SpecificationKeyReadSchema } from './specification-key.read.dto'

export const SpecificationValueReadSchema = SpecificationValueSchema.omit({
  created_at: true,
  updated_at: true,
  active: true,
  deleted_at: true,
}).extend({
  key: SpecificationKeyReadSchema,
})
