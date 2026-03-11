import { z, DemandSchema, ObjectTypeSchema, ProfileReadSchema } from '~/schemas'

export const DemandReadSchema = DemandSchema.extend({
  object_types: ObjectTypeSchema.nullable(),
  owner: ProfileReadSchema.nullable(),
})

export const DemandReadRowsSchema = z.array(DemandReadSchema)
