import type { Demand, DemandInsert, DemandWithObjectType } from '~/types'
import { DemandSchema, DemandWithObjectTypeRowsSchema } from '~/schemas'
import { AppError } from '~/error/AppError'
const useDemand = () => {
  const supabase = useSupabaseClient()

  const isCreating = ref(false)

  const fetchAll = async (): Promise<DemandWithObjectType[]> => {
    if (import.meta.dev) {
      await delay(DELAY)
    }
    const { data, error } = await supabase.from('demand').select(`
        *,
        object_types (*)
        `)

    if (error) throw new AppError('Erro ao buscar as demandas', error)

    const parsed = DemandWithObjectTypeRowsSchema.safeParse(data)
    if (!parsed.success) {
      throw new AppError('Erro ao validar dados de demanda', parsed.error)
    }
    return parsed.data
  }

  const create = async (values: DemandInsert): Promise<Demand> => {
    isCreating.value = true
    if (import.meta.dev) {
      await delay(DELAY)
    }

    try {
      const { data: newData, error: dbError } = await supabase
        .from('demand')
        .insert(values as never)
        .select()
        .single()
      if (dbError) throw dbError
      return DemandSchema.parse(newData)
    } finally {
      isCreating.value = false
    }
  }
  return { fetchAll, create, isCreating }
}

export default useDemand
