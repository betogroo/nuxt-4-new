import { ProfileReadSummarySchema } from '~/schemas/profile/dto/profile.read.dto'
import { ObjectTypeReadSchema } from './object-type.read.dto'
import { DemandSchema } from '../entities/demand.schema'

export const DemandReadSchema = DemandSchema.pick({
  id: true,
  description: true,
  electronic_process_number: true,
  internal_process_number: true,
  dispute_date: true,
  created_at: true,
})

export const DemandReadDetailSchema = DemandReadSchema.extend({
  object_type: ObjectTypeReadSchema,
  owner: ProfileReadSummarySchema,
})
