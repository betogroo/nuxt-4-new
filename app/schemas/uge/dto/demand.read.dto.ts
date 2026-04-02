import { DemandSchema } from '~/schemas/uge'
import { ObjectTypeSchema } from '../object-type/object-type.base.schema'
import { ProfileReadSchema } from '~/schemas'

export const DemandReadSchema = DemandSchema.extend({
  object_types: ObjectTypeSchema.nullable(),
  owner: ProfileReadSchema.nullable(),
})
