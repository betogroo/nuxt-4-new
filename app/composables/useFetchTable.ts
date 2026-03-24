import { AppError } from '~/error/AppError'
import type { ZodSchema } from 'zod'
import type { TableName } from '~/types'

type UseFetchTableOptions<T> = {
  table: TableName
  schema: ZodSchema<T>
  select?: string
}

export function useFetchTable<T>({ table, schema, select = '*' }: UseFetchTableOptions<T>) {
  const supabase = useSupabaseClient()

  const fetchAll = async (): Promise<T> => {
    if (import.meta.dev) {
      await delay(DELAY)
    }

    const { data, error } = await supabase.from(table).select(select)

    if (error) {
      throw new AppError(`Não foi possível carregar dados de "${table}"`, error)
    }

    const parsed = schema.safeParse(data)

    if (!parsed.success) {
      throw new AppError(`Erro ao validar dados de "${table}"`, parsed.error)
    }

    return parsed.data
  }

  return {
    fetchAll,
  }
}
