import { BaseEntitySchema } from '~/schemas/base/base.entity.schema'
import { nameRule, uuidRule } from '~/schemas/rules'

export const DemandStatusTransitionSchema = BaseEntitySchema.extend({
  from_status_id: uuidRule,
  to_status_id: uuidRule,
  action_label: nameRule,
})
