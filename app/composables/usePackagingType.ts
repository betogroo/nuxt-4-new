import z from 'zod'
import { ProductPackagingTypeWithPackagingSchema } from '~/schemas/uge'
import { PackagingTypeSchema } from '~/schemas/uge/entities'
import type { PackagingType, ProductPackagingTypeWithPackaging } from '~/types'

const usePackagingType = () => {
  const { fetchAll } = useTableFetch<PackagingType[]>({
    table: 'packaging_types',
    schema: z.array(PackagingTypeSchema),
  })

  const { fetchMany: fetchByProductId } = useTableFetchMany<ProductPackagingTypeWithPackaging[]>({
    table: 'product_packaging_types',
    schema: z.array(ProductPackagingTypeWithPackagingSchema),
    select: `
    packaging_types!inner (id, name,name_bec)
    `,
  })

  const select = useLazySelect('packagingType', fetchAll)

  return { fetchAll, fetchByProductId, select }
}

export default usePackagingType
