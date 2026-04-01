import { z } from '~/schemas'
import { PackagingTypeSchema } from '~/schemas/uge/entities'
import type { PackagingType } from '~/types'

const usePackagingType = () => {
  const { fetchAll } = useTableFetch<PackagingType[]>({
    table: 'packaging_types',
    schema: z.array(PackagingTypeSchema),
  })

  const select = useLazySelect('packagingType', fetchAll)
  return { fetchAll, select }
}

export default usePackagingType
