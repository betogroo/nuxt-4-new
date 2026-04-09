import { ObjectTypeReadSummarySchema, z } from '~/schemas'
import type { ObjectTypeReadSummary } from '~/types'

const useObjectType = () => {
  const { fetchAll } = useTableFetch<ObjectTypeReadSummary[]>({
    table: 'object_types',
    schema: z.array(ObjectTypeReadSummarySchema),
    select: 'id, name, ptres',
  })

  const select = useLazySelect('objectTypes', fetchAll)
  return { fetchAll, select }
}

export default useObjectType
