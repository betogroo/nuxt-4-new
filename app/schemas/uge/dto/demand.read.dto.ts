import { DemandSchema, ObjectTypeReadSchema } from '~/schemas/uge'
import { ProfileReadSummarySchema } from '~/schemas/profile/dto/profile.read.dto'

export const DemandReadSchema = DemandSchema.pick({
  id: true,
  description: true,
  electronic_process_number: true,
  internal_process_number: true,
  dispute_date: true,
  created_at: true,
  status: true,
})

export const DemandReadDetailSchema = DemandReadSchema.extend({
  object_type: ObjectTypeReadSchema,
  owner: ProfileReadSummarySchema,
})
