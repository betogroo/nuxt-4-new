import type { Demand } from '~/types'
import { DemandRowsSchema } from '~/schemas'
const useDemand = () => {
  const supabase = useSupabaseClient()

  const isFetching = ref(false)
  const demands = ref<Demand[]>([])

  const fetchAll = async () => {
    isFetching.value = true
    if (import.meta.dev) {
      await delay(1000)
    }
    try {
      const { data, error: fetchError } = await supabase.from('demand').select('*')
      if (fetchError) throw fetchError
      demands.value = DemandRowsSchema.parse(data)
    } finally {
      isFetching.value = false
    }
  }
  return { demands, fetchAll }
}

export default useDemand
