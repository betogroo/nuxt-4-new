import { DemandSchema } from '../entities/demand.schema'

export const DemandInsertSchema = DemandSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  deleted_at: true,
  internal_process_number: true,
  owner_id: true,
  status: true,
  year: true,
  active: true,
})
