import z from 'zod'
import { DemandItemInsertSchema } from '~/schemas/uge/dto/demand-item.insert.dto'
import { DemandItemReadSchema } from '~/schemas/uge/dto/demand-item.read.dto'
import { DemandItemSchema } from '~/schemas/uge/entities/demand-item.schema'
import type { DemandItem, DemandItemInsert, DemandItemRead } from '~/types'

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
