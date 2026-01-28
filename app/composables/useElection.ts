import type { Database, Election, ElectionInsert } from '~/types'
import { ElectionRowsSchema } from '~/schemas'
const useElection = () => {
  const supabase = useSupabaseClient<Database>()

  const isCreating = ref(false)
  const isFetching = ref(false)

  const elections = ref<Election[]>()

  const fetchAll = async () => {
    isFetching.value = true
    await delay(5000)
    try {
      const { data: election, error: fetchError } = await supabase.from('election').select('*')
      if (fetchError) throw fetchError
      elections.value = ElectionRowsSchema.parse(election)
    } finally {
      isFetching.value = false
    }
  }

  const create = async (values: ElectionInsert) => {
    isCreating.value = true
    await delay(5000)
    try {
      const { error: dbError } = await supabase.from('election').insert(values)
      if (dbError) throw dbError
    } finally {
      isCreating.value = false
    }
  }

  return { elections, isCreating, isFetching, create, fetchAll }
}

export default useElection
