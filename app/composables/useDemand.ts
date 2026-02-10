import type { DemandWithObjectType } from '~/types'
import { DemandWithObjectTypeRowsSchema } from '~/schemas'
import { AppError } from '~/error/AppError'
const useDemand = () => {
  const supabase = useSupabaseClient()

  const isFetching = ref(false)
  const demands = ref<DemandWithObjectType[]>()

  const fetchAll = async () => {
    isFetching.value = true
    if (import.meta.dev) {
      await delay(1000)
    }
    try {
      await useAssertSession()
      const { data, error } = await supabase.from('demand').select(`
        *,
        object_types (*)
        `)

      if (error) throw new AppError('Erro ao buscar as demandas', error)

      const parsed = DemandWithObjectTypeRowsSchema.safeParse(data)
      if (!parsed.success) {
        throw new AppError('Erro ao validar dados de demanda', parsed.error)
      }
      demands.value = parsed.data
    } finally {
      isFetching.value = false
    }
  }
  return { demands, isFetching, fetchAll }
}

export default useDemand
