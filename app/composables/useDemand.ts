import z from 'zod'
import { DemandInsertSchema, type DemandInsert } from '~/schemas/uge/dto/demand.insert.dto'
import { DemandReadDetailSchema, type DemandReadDetail } from '~/schemas/uge/dto/demand.read.dto'
import { DemandSchema, type Demand } from '~/schemas/uge/entities/demand.schema'

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
