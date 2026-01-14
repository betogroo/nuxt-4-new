import type { Database, Election } from '~/types'
import { ElectionRowsSchema } from '~/schemas'
const useElection = () => {
  const supabase = useSupabaseClient<Database>()

  const elections = ref<Election[]>()

  const fetchAll = async () => {
    try {
      const { data: election, error } = await supabase.from('election').select('*')
      if (error) throw error
      elections.value = ElectionRowsSchema.parse(election)
      console.log(elections.value)
    } catch (err) {
      console.log(err)
    }
  }

  return { elections, fetchAll }
}

export default useElection
