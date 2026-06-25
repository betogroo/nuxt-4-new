import z from 'zod'
import { DemandInsertSchema } from '~/schemas/uge/dto/demand.insert.dto'
import { DemandReadDetailSchema } from '~/schemas/uge/dto/demand.read.dto'
import { DemandSchema } from '~/schemas/uge/entities/demand.schema'
import type { DemandReadDetail, DemandInsert, Demand } from '~/types'

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
