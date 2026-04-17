import { DemandStatusTransitionSchema } from '../entities/demand-status-transition.schema'
import { DemandStatusReadSchema } from './demand-status.read.dto'

export const DemandStatusTransitionReadSchema = DemandStatusTransitionSchema.pick({
  from_status_id: true,
  action_label: true,
}).extend({
  to_status: DemandStatusReadSchema,
})
