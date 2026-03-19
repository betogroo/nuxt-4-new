import type { Demand, DemandInsert, DemandRead } from '~/types'
import { DemandSchema, DemandReadRowsSchema } from '~/schemas'
import { AppError } from '~/error/AppError'
const useDemand = () => {
  const supabase = useSupabaseClient()

  const isCreating = ref(false)

  const fetchAll = async (): Promise<DemandRead[]> => {
    if (import.meta.dev) {
      await delay(DELAY)
    }
    const { data, error } = await supabase.from('demands').select(`
        *,
        object_types (*), owner: profiles (*)
        `)

    if (error) throw new AppError('Erro ao buscar as demandas', error)

    const parsed = DemandReadRowsSchema.safeParse(data)
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
        .from('demands')
        .insert(values as never)
        .select()
        .single()
      if (dbError) throw dbError
      return DemandSchema.parse(newData)
    } finally {
      isCreating.value = false
    }
  }

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
