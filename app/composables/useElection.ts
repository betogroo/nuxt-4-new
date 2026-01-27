import type { Database, Election, ElectionInsert } from '~/types'
import { ElectionRowsSchema } from '~/schemas'
const useElection = () => {
  const supabase = useSupabaseClient<Database>()

  const isLoading = ref(false)

  const elections = ref<Election[]>()

  const fetchAll = async () => {
    try {
      const { data: election, error } = await supabase.from('election').select('*')
      if (error) throw error
      elections.value = ElectionRowsSchema.parse(election)
    } catch (err) {
      console.log(err)
    }
  }

  const create = async (values: ElectionInsert) => {
    isLoading.value = true
    await delay(5000)
    try {
      const { error: dbError } = await supabase.from('election').insert(values)
      if (dbError) throw dbError
    } finally {
      isLoading.value = false
    }
  }

  return { elections, isLoading, create, fetchAll }
}

export default useElection
