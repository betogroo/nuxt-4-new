import type { DemandWithObjectType } from '~/types'
import { DemandWithObjectTypeRowsSchema } from '~/schemas'
import { AppError } from '~/error/AppError'
const useDemand = () => {
  const supabase = useSupabaseClient()

  const fetchAll = async (): Promise<DemandWithObjectType[]> => {
    if (import.meta.dev) {
      await delay(1000) // 1 segundo só em dev
    }
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
    return parsed.data
  }
  return { fetchAll }
}

export default useDemand
