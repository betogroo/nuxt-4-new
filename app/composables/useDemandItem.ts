import { DemandItemInsertSchema, DemandItemSchema } from '~/schemas'
import type { DemandItem, DemandItemInsert } from '~/types'

const useDemandItem = () => {
  const { create, isCreating } = useTableCreate<DemandItem, DemandItemInsert>({
    table: 'demand_items',
    insertSchema: DemandItemInsertSchema,
    readSchema: DemandItemSchema,
  })
  return { create, isCreating }
}

export default useDemandItem
