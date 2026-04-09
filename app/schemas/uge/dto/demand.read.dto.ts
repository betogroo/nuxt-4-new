import { DemandSchema, ObjectTypeSchema } from '~/schemas/uge'
import { ProfileReadSchema } from '~/schemas/profile/dto/profile.read.dto'

export const DemandReadDetailSchema = DemandSchema.extend({
  object_types: ObjectTypeSchema.nullable(),
  owner: ProfileReadSchema.nullable(),
})
