import { z } from '~/schemas'
import { ProductSchema } from '~/schemas/uge/entities'
import {
  ProductInsertSchema,
  ProductReadDetailsSchema,
  ProductReadSummarySchema,
} from '~/schemas/uge/dto'
import type {
  ProductReadSummary,
  Product,
  ProductInsert,
  TableName,
  ProductReadDetails,
} from '~/types'

const TABLE: TableName = 'products'

const useProduct = () => {
  const { fetchAll } = useTableFetch<ProductReadDetails[]>({
    table: 'product_details_active',
    schema: z.array(ProductReadDetailsSchema),
  })

  const { fetchAll: fetchSelect } = useTableFetch<ProductReadSummary>({
    table: 'product_details_active',
    schema: ProductReadSummarySchema,
    select: 'id, description, specifications',
  })

  const { create, isCreating } = useTableCreate<Product, ProductInsert>({
    table: TABLE,
    insertSchema: ProductInsertSchema,
    readSchema: ProductSchema,
  })

  const { get } = useTableGet<ProductReadDetails>({
    table: 'product_details_active',
    schema: ProductReadDetailsSchema,
  })

  const select = useLazySelect('products_select', fetchSelect)

  return { fetchAll, create, get, isCreating, select }
}

export default useProduct
