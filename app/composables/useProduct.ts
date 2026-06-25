import z from 'zod'
import { ProductInsertSchema } from '~/schemas/uge/dto/product.insert.dto'
import {
  ProductReadDetailsSchema,
  ProductReadSummarySchema,
} from '~/schemas/uge/dto/product.read.dto'
import { ProductSchema } from '~/schemas/uge/entities/product.schema'

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

  const { fetchAll: fetchSelect } = useTableFetch<ProductReadSummary[]>({
    table: 'product_details_active',
    schema: z.array(ProductReadSummarySchema),
    select: 'id, name, description, specifications',
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
