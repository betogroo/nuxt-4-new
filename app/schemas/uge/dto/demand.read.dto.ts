import { DemandSchema, ObjectTypeReadSchema } from '~/schemas/uge'
import { ProfileReadSchema } from '~/schemas/profile/dto/profile.read.dto'

export const DemandReadSchema = DemandSchema

export const DemandReadDetailSchema = DemandReadSchema.extend({
  object_type: ObjectTypeReadSchema,
  owner: ProfileReadSchema,
})
