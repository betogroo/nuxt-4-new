import { SpecificationKeySchema } from '../entities/specification-key.schema'

export const SpecificationInsertKeySchema = SpecificationKeySchema.pick({
  name: true,
})
