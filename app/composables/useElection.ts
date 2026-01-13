import type { Database, Election } from '~/types'
const useElection = () => {
  const supabase = useSupabaseClient<Database>()

  const elections = ref<Election[]>()

  const fetchAll = async () => {
    try {
      const { data: election, error } = await supabase.from('election').select('*')
      if (error) throw error
      elections.value = election
    } catch (err) {
      console.log(err)
    }
  }

  return { elections, fetchAll }
}

export default useElection
