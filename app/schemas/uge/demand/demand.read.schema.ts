import { z, DemandSchema, ObjectTypeSchema } from '~/schemas'

export const DemandReadSchema = DemandSchema.extend({
  object_types: ObjectTypeSchema.nullable(),
})

export const DemandReadRowsSchema = z.array(DemandReadSchema)
