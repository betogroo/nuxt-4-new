import type { Demand } from '~/types'
import { DemandRowsSchema } from '~/schemas'
import { AppError } from '~/error/AppError'
const useDemand = () => {
  const supabase = useSupabaseClient()

  const isFetching = ref(false)
  const demands = ref<Demand[]>()

  const fetchAll = async () => {
    isFetching.value = true
    if (import.meta.dev) {
      await delay(1000)
    }
    try {
      await useAssertSession()
      const { data, error } = await supabase.from('demand').select('*')

      if (error) throw new AppError('Erro ao buscar as demandas', error)

      const parsed = DemandRowsSchema.safeParse(data)
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
