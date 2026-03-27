import {
  ProductInsertSchema,
  ProductReadRowsSchema,
  ProductReadSelectSchema,
  ProductSchema,
} from '~/schemas'
import type { ProductReadSelect, Product, ProductInsert, ProductRead, TableName } from '~/types'

const TABLE: TableName = 'products'

const useProduct = () => {
  const { fetchAll } = useTableFetch<ProductRead[]>({
    table: 'products',
    schema: ProductReadRowsSchema,
    select: `
     *,
      product_class (id, name, code),
      expense_types (id, expense_number, name)
    `,
  })

  const { fetchAll: fetchSelect } = useTableFetch<ProductReadSelect>({
    table: 'products',
    schema: ProductReadSelectSchema,
    select: '(id, description, specifications)',
  })

  const { create, isCreating } = useTableCreate<Product, ProductInsert>({
    table: TABLE,
    insertSchema: ProductInsertSchema,
    readSchema: ProductSchema,
  })

  const select = useLazySelect('products', fetchSelect)

  return { fetchAll, create, isCreating, select }
}

export default useProduct
