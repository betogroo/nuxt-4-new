import z from 'zod'
import { ProductInsertSchema, type ProductInsert } from '~/schemas/uge/dto/product.insert.dto'
import {
  ProductReadDetailsSchema,
  ProductReadSummarySchema,
  type ProductReadDetails,
  type ProductReadSummary,
} from '~/schemas/uge/dto/product.read.dto'
import { ProductSchema, type Product } from '~/schemas/uge/entities/product.schema'

import type { TableName } from '~/types'

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

  const { update, isUpdating } = useTableUpdate<Product, Partial<ProductInsert>>({
    table: TABLE,
    updateSchema: ProductInsertSchema.partial(),
    readSchema: ProductSchema,
  })

  const { remove, isDeleting } = useTableDelete<Product>({
    table: TABLE,
    readSchema: ProductSchema,
  })

  const { get } = useTableGet<ProductReadDetails>({
    table: 'product_details_active',
    schema: ProductReadDetailsSchema,
  })

  const select = useLazySelect('products_select', fetchSelect)

  return { fetchAll, create, isCreating, update, isUpdating, remove, isDeleting, get, select }
}

export default useProduct
