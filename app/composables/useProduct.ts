import { ProductInsertSchema, ProductReadRowsSchema, ProductSchema } from '~/schemas'
import type { Product, ProductInsert, ProductRead, TableName } from '~/types'

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

  const { create, isCreating } = useTableCreate<Product, ProductInsert>({
    table: TABLE,
    insertSchema: ProductInsertSchema,
    readSchema: ProductSchema,
  })

  return { fetchAll, create, isCreating }
}

export default useProduct
