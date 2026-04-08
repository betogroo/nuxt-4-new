import { AppError } from '~/error/AppError'
import type { ZodSchema } from 'zod'
import type { TableName, ViewName } from '~/types'

type OrderBy = {
  column: string
  ascending?: boolean
}

type UseTableFetchOptions<T> = {
  table: TableName | ViewName
  schema: ZodSchema<T>
  select?: string
  orderBy?: OrderBy[]
}

const useTableFetch = <T>({ table, schema, select = '*', orderBy }: UseTableFetchOptions<T>) => {
  const supabase = useSupabaseClient()

  const fetchAll = async (): Promise<T> => {
    if (import.meta.dev) {
      await delay(DELAY)
    }
    let query = supabase.from(table as never).select(select)
    if (orderBy?.length) {
      orderBy.forEach(({ column, ascending = true }) => {
        query = query.order(column, { ascending })
      })
    }

    const { data, error } = await query

    if (error) {
      throw new AppError(`Não foi possível carregar dados de "${table}"`, error)
    }

    const parsed = schema.safeParse(data)

    if (!parsed.success) {
      console.log('useTAbleFetch(): ', parsed.error)
      throw new AppError(`Erro ao validar dados de "${table}"`, parsed.error)
    }

    return parsed.data
  }

  return {
    fetchAll,
  }
}
export default useTableFetch
