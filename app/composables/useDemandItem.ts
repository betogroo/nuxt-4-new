import { DemandItemInsertSchema, DemandItemReadSchema, DemandItemSchema, z } from '~/schemas'
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
