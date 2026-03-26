import type { ZodSchema } from 'zod'
import type { TableName } from '~/types'

type UseTableCreateOptions<TRow, TInsert> = {
  table: TableName
  insertSchema: ZodSchema<TInsert>
  readSchema: ZodSchema<TRow>
}

const useTableCreate = <TRow, TInsert>({
  table,
  insertSchema,
  readSchema,
}: UseTableCreateOptions<TRow, TInsert>) => {
  const supabase = useSupabaseClient()
  const isCreating = ref(false)

  const create = async (values: TInsert): Promise<TRow> => {
    isCreating.value = true
    if (import.meta.dev) {
      await delay(DELAY)
    }
    try {
      const validValues = insertSchema.parse(values)
      const { data: newData, error: dbError } = await supabase
        .from(table)
        .insert(validValues as never)
        .select()
        .single()
      if (dbError) throw dbError
      return readSchema.parse(newData)
    } finally {
      isCreating.value = false
    }
  }

  return { create, isCreating }
}

export default useTableCreate
