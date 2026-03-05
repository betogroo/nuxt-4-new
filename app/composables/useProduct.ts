import { AppError } from '~/error/AppError'
import { ProductReadRowsSchema } from '~/schemas'
import type { ProductRead } from '~/types'

const useProduct = () => {
  const supabase = useSupabaseClient()

  const fetchAll = async (): Promise<ProductRead[]> => {
    if (import.meta.dev) {
      await delay(DELAY)
    }
    const { data, error } = await supabase.from('products').select(`*`)

    if (error) throw new AppError('Erro ao buscar produtos', error)

    const parsed = ProductReadRowsSchema.safeParse(data)
    if (!parsed.success) {
      throw new AppError('Erro ao validar dados do produto', parsed.error)
    }
    return parsed.data
  }
  return { fetchAll }
}

export default useProduct
