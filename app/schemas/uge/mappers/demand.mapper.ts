// schemas/uge/mappers/demand.mapper.ts

import type { DemandInsert } from '../dto/demand.insert.dto'
import type { DemandReadDetail } from '../dto/demand.read.dto'
import type { DemandUpdate } from '../dto/demand.update.dto'
import type { DemandForm } from '../forms/demand.form.schema'

export function toDemandInsert(form: DemandForm): DemandInsert {
  return {
    description: form.description,
    electronic_process_number: form.electronic_process_number ?? null,
    dispute_date: form.dispute_date ?? null,
    object_types_id: form.object_types_id,
  }
}

export function toDemandUpdate(form: DemandForm): DemandUpdate {
  return toDemandInsert(form) // mesma forma, mesmo destino de campos
}

export function toDemandForm(demand: DemandReadDetail): DemandForm {
  return {
    description: demand.description,
    electronic_process_number: demand.electronic_process_number ?? undefined,
    dispute_date: demand.dispute_date ?? undefined,
    object_types_id: demand.object_type.id,
  }
}
