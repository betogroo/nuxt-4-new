import { ObjectTypeRowsSchema } from '~/schemas'
import type { ObjectType } from '~/types'

const useObjectType = () => {
  const { fetchAll } = useTableFetch<ObjectType[]>({
    table: 'object_types',
    schema: ObjectTypeRowsSchema,
  })
  return { fetchAll }
}

export default useObjectType
