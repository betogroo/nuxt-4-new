import type { Election, ElectionInsert } from '~/types'
import { ElectionRowsSchema, ElectionSchema } from '~/schemas'
import { AppError } from '~/error/AppError'
const useElection = () => {
  const supabase = useSupabaseClient()

  const isCreating = ref(false)
  const isFetching = ref(false)

  const elections = ref<Election[]>()

  const fetchAll = async (): Promise<Election[]> => {
    if (import.meta.dev) {
      await delay(1000)
    }
    await useAssertSession()
    const { data, error } = await supabase.from('election').select('*')

    if (error) throw new AppError('Erro ao buscar as eleições', error)
    const parsed = ElectionRowsSchema.safeParse(data)
    if (!parsed.success) {
      throw new AppError('Erro ao validar dados de eleição', parsed.error)
    }

    return parsed.data
  }

  const get = async (id: string) => {
    if (import.meta.dev) {
      await delay(500)
    }
    const { data, error } = await supabase.from('election').select('*').eq('id', id).single()
    if (error) throw error
    return ElectionSchema.parse(data)
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

  return { elections, isCreating, isFetching, create, fetchAll, get }
}

export default useElection
