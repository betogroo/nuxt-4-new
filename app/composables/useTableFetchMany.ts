import { AppError } from '~/error/AppError'
import type { ZodSchema } from 'zod'
import type { TableName } from '~/types'

type OrderBy = {
  column: string
  ascending?: boolean
}

type Filter = {
  column: string
  //operator: FilterOperator
  value: string | number
}

type UseTableFetchOptions<T> = {
  table: TableName
  schema: ZodSchema<T>
  select?: string
  orderBy?: OrderBy[]
}
const useTableFetchMany = <T>({
  table,
  schema,
  select = '*',
  orderBy,
}: UseTableFetchOptions<T>) => {
  const supabase = useSupabaseClient()
  const baseQuery = supabase.from(table).select(select)

  const fetchMany = async (filter: Filter): Promise<T> => {
    if (import.meta.dev) {
      await delay(DELAY)
    }
    let query = baseQuery
    if (orderBy?.length) {
      orderBy.forEach(({ column, ascending = true }) => {
        query = query.order(column, { ascending })
      })
    }

    query = query.eq(filter.column, filter.value)

    const { data, error } = await query

    if (error) {
      throw new AppError(`Não foi possível carregar dados de "${table}"`, error)
    }

    const parsed = schema.safeParse(data)

    if (!parsed.success) {
      console.log('useTAbleFetchMany(): ', parsed.error)
      throw new AppError(`Erro ao validar dados de "${table}"`, parsed.error)
    }

    return parsed.data
  }

  return {
    fetchMany,
  }
}
export default useTableFetchMany
