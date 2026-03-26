import type { DemandRead, DemandInsert, Demand, TableName } from '~/types'
import { DemandInsertSchema, DemandReadRowsSchema, DemandSchema } from '~/schemas'
const TABLE: TableName = 'demands'
const useDemand = () => {
  const supabase = useSupabaseClient()

  const { fetchAll } = useTableFetch<DemandRead[]>({
    table: TABLE,
    schema: DemandReadRowsSchema,
    select: `
    *,
        object_types (*), owner: profiles (*)
    `,
  })

  const { create, isCreating } = useTableCreate<Demand, DemandInsert>({
    table: TABLE,
    insertSchema: DemandInsertSchema,
    readSchema: DemandSchema,
  })

  const get = async (id: string) => {
    if (import.meta.dev) {
      await delay(500)
    }
    const { data, error } = await supabase.from('demands').select('*').eq('id', id).single()
    if (error) throw error
    return DemandSchema.parse(data)
  }
  return { fetchAll, create, isCreating, get }
}

export default useDemand
