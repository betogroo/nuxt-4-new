import { z } from '~/schemas'
import { ProductClassReadSummarySchema } from '~/schemas/uge/'
import type { ProductClassReadSummary } from '~/types'

const useProductClass = () => {
  const { fetchAll } = useTableFetch<ProductClassReadSummary[]>({
    table: 'product_class',
    schema: z.array(ProductClassReadSummarySchema),
    select: '(id, name, code)',
    orderBy: [{ column: 'code' }],
  })

  const select = useLazySelect('productClasses', fetchAll)
  return { fetchAll, select }
}

export default useProductClass
