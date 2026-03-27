import { PackagingTypeRowsSchema } from '~/schemas'
import type { PackagingType } from '~/types'

const usePackagingType = () => {
  const { fetchAll } = useTableFetch<PackagingType[]>({
    table: 'packaging_types',
    schema: PackagingTypeRowsSchema,
  })

  const select = useLazySelect('packagingType', fetchAll)
  return { fetchAll, select }
}

export default usePackagingType
