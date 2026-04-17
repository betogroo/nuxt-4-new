import { DemandStatusSchema } from '../entities/demand-status.schema'

export const DemandStatusReadSchema = DemandStatusSchema.pick({
  id: true,
  code: true,
  name: true,
  color: true,
  sort_order: true,
  allow_cancel: true,
})
