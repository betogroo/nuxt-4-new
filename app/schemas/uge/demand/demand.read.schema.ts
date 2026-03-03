import { z, DemandSchema, ObjectTypeSchema, ProfileSchema } from '~/schemas'

export const DemandReadSchema = DemandSchema.extend({
  object_types: ObjectTypeSchema.nullable(),
  owner: ProfileSchema.nullable(),
})

export const DemandReadRowsSchema = z.array(DemandReadSchema)
