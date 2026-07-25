import z, { type ZodSchema } from 'zod'
import type { TableName } from '~/types'

type UseTableDeleteOptions<TRow> = {
  table: TableName
  readSchema: ZodSchema<TRow>
}

const softDeleteSchema = z.object({
  deleted_at: z.string(),
  active: z.boolean(),
})

type SoftDeletePayload = z.infer<typeof softDeleteSchema>

const useTableDelete = <TRow>({
  table,
  readSchema,
}: UseTableDeleteOptions<TRow>) => {
  const { update, isUpdating } = useTableUpdate<TRow, SoftDeletePayload>({
    table,
    updateSchema: softDeleteSchema,
    readSchema,
  })

  const remove = async (id: string | number): Promise<TRow> => {
    return await update(id, {
      deleted_at: new Date().toISOString(),
      active: false,
    })
  }

  return { remove, isDeleting: isUpdating }
}

export default useTableDelete
