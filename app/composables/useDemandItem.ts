import z from 'zod'
import {
  DemandItemInsertSchema,
  type DemandItemInsert,
} from '~/schemas/uge/dto/demand-item.insert.dto'
import { DemandItemReadSchema, type DemandItemRead } from '~/schemas/uge/dto/demand-item.read.dto'
import { DemandItemSchema, type DemandItem } from '~/schemas/uge/entities/demand-item.schema'

const useDemandItem = () => {
  const { fetchMany: fetchDemandItemsByDemands } = useTableFetchMany<DemandItemRead[]>({
    table: 'demand_items_active',
    schema: z.array(DemandItemReadSchema),
  })

  const { create, isCreating } = useTableCreate<DemandItem, DemandItemInsert>({
    table: 'demand_items',
    insertSchema: DemandItemInsertSchema,
    readSchema: DemandItemSchema,
  })

  const { update, isUpdating } = useTableUpdate<DemandItem, Partial<DemandItemInsert>>({
    table: 'demand_items',
    updateSchema: DemandItemInsertSchema.partial(),
    readSchema: DemandItemSchema,
  })

  const { remove, isDeleting } = useTableDelete<DemandItem>({
    table: 'demand_items',
    readSchema: DemandItemSchema,
  })

  return { create, isCreating, update, isUpdating, remove, isDeleting, fetchDemandItemsByDemands }
}

export default useDemandItem
