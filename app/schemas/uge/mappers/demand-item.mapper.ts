// schemas/uge/mappers/demand.mapper.ts

import type { DemandItemInsert } from '../dto/demand-item.insert.dto'
import type { DemandItemForm } from '../forms/demand-item.form.schema'

export function toDemandItemInsert(
  form: DemandItemForm,
  context: { demandId: string },
): DemandItemInsert {
  return {
    product_id: form.product_id,
    packaging_type_id: form.packaging_type_id,
    quantity: form.quantity,
    demand_id: context.demandId,
  }
}
