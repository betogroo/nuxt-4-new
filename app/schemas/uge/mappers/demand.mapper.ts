// schemas/uge/mappers/demand.mapper.ts

import type { DemandInsert } from '../dto/demand.insert.dto'
import type { DemandForm } from '../forms/demand.form.schema'

export function toDemandInsert(form: DemandForm): DemandInsert {
  return {
    description: form.description,
    electronic_process_number: form.electronic_process_number ?? null,
    dispute_date: form.dispute_date ?? null,
    object_types_id: form.object_types_id,
  }
}
