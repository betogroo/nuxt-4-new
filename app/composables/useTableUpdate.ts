import type { ZodSchema } from 'zod'
import type { TableName } from '~/types'

type UseTableUpdateOptions<TRow, TUpdate> = {
  table: TableName
  updateSchema: ZodSchema<TUpdate>
  readSchema: ZodSchema<TRow>
}

const useTableUpdate = <TRow, TUpdate>({
  table,
  updateSchema,
  readSchema,
}: UseTableUpdateOptions<TRow, TUpdate>) => {
  const supabase = useSupabaseClient()
  const isUpdating = ref(false)

  const update = async (id: string | number, values: TUpdate): Promise<TRow> => {
    isUpdating.value = true
    if (import.meta.dev) {
      await delay(DELAY)
    }
    try {
      const validValues = updateSchema.parse(values)
      const { data: updatedData, error: dbError } = await supabase
        .from(table)
        .update(validValues as never)
        .eq('id', id)
        .select()
        .single()
      if (dbError) throw dbError
      return readSchema.parse(updatedData)
    } finally {
      isUpdating.value = false
    }
  }

  return { update, isUpdating }
}

export default useTableUpdate
