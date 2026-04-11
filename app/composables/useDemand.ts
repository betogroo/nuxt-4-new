import { z } from '~/schemas'
import type { DemandReadDetail, DemandInsert, Demand } from '~/types'
import { DemandInsertSchema, DemandReadDetailSchema, DemandSchema } from '~/schemas/uge'

const useDemand = () => {
  //const supabase = useSupabaseClient()

  const { fetchAll } = useTableFetch<DemandReadDetail[]>({
    table: 'demand_details_active',
    schema: z.array(DemandReadDetailSchema),
    orderBy: [{ column: 'internal_process_number' }],
  })

  const { create, isCreating } = useTableCreate<Demand, DemandInsert>({
    table: 'demands',
    insertSchema: DemandInsertSchema,
    readSchema: DemandSchema,
  })

  const { get } = useTableGet<DemandReadDetail>({
    table: 'demand_details_active',
    schema: DemandReadDetailSchema,
  })

  return { fetchAll, create, isCreating, get }
}

export default useDemand
