import { ProductClassRowsSchema } from '~/schemas'
import { AppError } from '~/error/AppError'

const useProductClass = () => {
  const supabase = useSupabaseClient()
  const fetchAll = async () => {
    if (import.meta.dev) {
      await delay(DELAY)
    }
    const { data, error } = await supabase.from('product_class').select('*')
    if (error) throw new AppError('Não foi possível carregar as opções', error)
    const parsed = ProductClassRowsSchema.safeParse(data)
    if (!parsed.success) {
      throw new AppError('Erro ao validar as opções', parsed.error)
    }
    return parsed.data
  }
  return { fetchAll }
}

export default useProductClass
