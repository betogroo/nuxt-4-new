import { ProductClassRowsSchema } from '~/schemas'
import type { ProductClass } from '~/types'

const useProductClass = () => {
  const { fetchAll } = useTableFetch<ProductClass[]>({
    table: 'product_class',
    schema: ProductClassRowsSchema,
    select: '(id, name, code)',
    orderBy: [{ column: 'code' }],
  })

  const select = useLazySelect('productClasses', fetchAll)
  return { fetchAll, select }
}

export default useProductClass
