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
  return { create, fetchDemandItemsByDemands, isCreating }
}

export default useDemandItem
