import { z } from '~/schemas'
import type { DemandRead, DemandInsert, Demand, TableName } from '~/types'
import { DemandInsertSchema, DemandReadSchema, DemandSchema } from '~/schemas/uge'

const TABLE: TableName = 'demands'
const useDemand = () => {
  //const supabase = useSupabaseClient()

  const { fetchAll } = useTableFetch<DemandRead[]>({
    table: TABLE,
    schema: z.array(DemandReadSchema),
    select: `
    *,
        object_types (*), owner: profiles (id, name, role, avatar_url)
    `,
    orderBy: [{ column: 'internal_process_number' }],
  })

  const { create, isCreating } = useTableCreate<Demand, DemandInsert>({
    table: TABLE,
    insertSchema: DemandInsertSchema,
    readSchema: DemandSchema,
  })

  const { get } = useTableGet<Demand>({ table: TABLE, schema: DemandSchema })

  /* const get = async (id: string) => {
    if (import.meta.dev) {
      await delay(500)
    }
    const { data, error } = await supabase.from('demands').select('*').eq('id', id).single()
    if (error) throw error
    return DemandSchema.parse(data)
  } */
  return { fetchAll, create, isCreating, get }
}

export default useDemand
