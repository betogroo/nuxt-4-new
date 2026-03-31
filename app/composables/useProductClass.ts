import { z } from '~/schemas'
import { ProductClassSchema } from '~/schemas/uge/entities'
import type { ProductClass } from '~/types'

const useProductClass = () => {
  const { fetchAll } = useTableFetch<ProductClass[]>({
    table: 'product_class',
    schema: z.array(ProductClassSchema),
    select: '(id, name, code)',
    orderBy: [{ column: 'code' }],
  })

  const select = useLazySelect('productClasses', fetchAll)
  return { fetchAll, select }
}

export default useProductClass
