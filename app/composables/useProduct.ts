import { z } from '~/schemas'
import { ProductSchema } from '~/schemas/uge/entities'
import { ProductInsertSchema, ProductReadSchema, ProductReadSummarySchema } from '~/schemas/uge/dto'
import type { ProductReadSummary, Product, ProductInsert, ProductRead, TableName } from '~/types'

const TABLE: TableName = 'products'

const useProduct = () => {
  const { fetchAll } = useTableFetch<ProductRead[]>({
    table: 'products',
    schema: z.array(ProductReadSchema),
    select: `
     *,
      product_class (id, name, code),
      expense_types (id, expense_number, name),
      product_packaging_types (
      packaging_types!inner (id, name,name_bec)
      )
    `,
  })

  const { fetchAll: fetchSelect } = useTableFetch<ProductReadSummary>({
    table: 'products',
    schema: ProductReadSummarySchema,
    select: 'id, description, specifications',
  })

  const { create, isCreating } = useTableCreate<Product, ProductInsert>({
    table: TABLE,
    insertSchema: ProductInsertSchema,
    readSchema: ProductSchema,
  })

  const select = useLazySelect('products_select', fetchSelect)

  return { fetchAll, create, isCreating, select }
}

export default useProduct
