import { z } from '~/schemas'
import { ProductClassReadSelectSchema } from '~/schemas/uge/'
import type { ProductClassReadSelect } from '~/types'

const useProductClass = () => {
  const { fetchAll } = useTableFetch<ProductClassReadSelect[]>({
    table: 'product_class',
    schema: z.array(ProductClassReadSelectSchema),
    select: '(id, name, code)',
    orderBy: [{ column: 'code' }],
  })

  const select = useLazySelect('productClasses', fetchAll)
  return { fetchAll, select }
}

export default useProductClass
