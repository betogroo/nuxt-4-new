import { ObjectTypeRowsSchema } from '~/schemas'
import { AppError } from '~/error/AppError'

const supabase = useSupabaseClient()

const useDemandObjectType = () => {
  const fetchAll = async () => {
    if (import.meta.dev) {
      await delay(DELAY)
    }
    const { data, error } = await supabase.from('object_types').select('*')
    if (error) throw new AppError('Não foi possível carregar as opções', error)
    const parsed = ObjectTypeRowsSchema.safeParse(data)
    if (!parsed.success) {
      throw new AppError('Erro ao validar as opções', parsed.error)
    }
    return parsed.data
  }
  return { fetchAll }
}

export default useDemandObjectType
