import type { Election, ElectionInsert } from '~/types'
import { ElectionRowsSchema } from '~/schemas'
const useElection = () => {
  const supabase = useSupabaseClient()

  const isCreating = ref(false)
  const isFetching = ref(false)

  const elections = ref<Election[]>()

  const fetchAll = async () => {
    isFetching.value = true
    if (import.meta.dev) {
      await delay(1000)
    }
    try {
      const { data: election, error: fetchError } = await supabase.from('election').select('*')
      if (fetchError) throw fetchError
      elections.value = ElectionRowsSchema.parse(election)
    } finally {
      isFetching.value = false
    }
  }

  const create = async (values: ElectionInsert): Promise<Election> => {
    isCreating.value = true
    if (import.meta.dev) {
      await delay(1000)
    }
    try {
      const { data: newData, error: dbError } = await supabase
        .from('election')
        .insert(values)
        .select()
        .single()
      if (dbError) throw dbError
      elections.value?.unshift(newData)
      return newData
    } finally {
      isCreating.value = false
    }
  }

  return { elections, isCreating, isFetching, create, fetchAll }
}

export default useElection
