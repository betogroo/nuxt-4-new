import type { ZodSchema } from 'zod'
import { AppError } from '~/error/AppError'
import type { TableName, ViewName } from '~/types'

type UseTableGetOptions<T> = {
  table: TableName | ViewName
  schema: ZodSchema<T>
  select?: string
}

const useTableGet = <T>({ table, schema, select = '*' }: UseTableGetOptions<T>) => {
  const supabase = useSupabaseClient()
  const get = async (key: string): Promise<T> => {
    if (import.meta.dev) {
      await delay(DELAY)
    }
    const { data, error } = await supabase
      .from(table as never)
      .select(select)
      .eq('id', key)
      .single()
    if (error) {
      throw new AppError(`Não foi possível carregar dados de "${table}"`, error)
    }
    if (data) console.log('Passou por aqui')
    const parsed = schema.safeParse(data)

    if (!parsed.success) {
      throw new AppError(`Erro ao validar dados de "${table}"`, parsed.error)
    }
    return parsed.data
  }

  return { get }
}

export default useTableGet
