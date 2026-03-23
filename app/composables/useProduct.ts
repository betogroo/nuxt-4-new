import { AppError } from '~/error/AppError'
import { ProductReadRowsSchema, ProductSchema } from '~/schemas'
import type { Product, ProductInsert, ProductRead } from '~/types'

const useProduct = () => {
  const supabase = useSupabaseClient()

  const isCreating = ref(false)

  const fetchAll = async (): Promise<ProductRead[]> => {
    if (import.meta.dev) {
      await delay(DELAY)
    }
    const { data, error } = await supabase.from('products').select(`
      *,
      product_class (id, name, code),
      expense_types (id, expense_number, name)
      `)

    if (error) throw new AppError('Erro ao buscar produtos', error)
    console.log(data)

    const parsed = ProductReadRowsSchema.safeParse(data)
    if (!parsed.success) {
      console.log(parsed.error)
      throw new AppError('Erro ao validar dados do produto', parsed.error)
    }
    return parsed.data
  }
  const create = async (values: ProductInsert): Promise<Product> => {
    isCreating.value = true
    if (import.meta.dev) {
      await delay(DELAY)
    }
    try {
      const { data: newData, error: dbError } = await supabase
        .from('products')
        .insert(values as never)
        .select()
        .single()
      if (dbError) throw dbError
      return ProductSchema.parse(newData)
    } finally {
      isCreating.value = false
    }
  }

  return { fetchAll, create, isCreating }
}

export default useProduct
