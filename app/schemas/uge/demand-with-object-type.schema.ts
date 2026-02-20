import { z, DemandSchema, ObjectTypeSchema } from '~/schemas'

export const DemandWithObjectTypeSchema = DemandSchema.extend({
  object_types: ObjectTypeSchema.nullable(),
})

export const DemandWithObjectTypeRowsSchema = z.array(DemandWithObjectTypeSchema)
