import type { ProductInsert } from '../dto/product.insert.dto'
import type { ProductReadDetails } from '../dto/product.read.dto'
import type { ProductForm } from '../forms/product.form.schema'

export function toProductInsert(form: ProductForm): ProductInsert {
  return {
    name: form.name,
    description: form.description,
    cat_mat: form.cat_mat,
    cat_bec: form.cat_bec,
    product_class_id: form.product_class_id,
    expense_type_id: form.expense_type_id,
    nat_gov: form.nat_gov,
    pdm: form.pdm,
    specifications: form.specifications,
  }
}

export function toProductUpdate(form: ProductForm): Partial<ProductInsert> {
  return toProductInsert(form)
}

export function toProductForm(product: ProductReadDetails): ProductForm {
  return {
    name: product.name,
    description: product.description,
    cat_mat: product.cat_mat,
    cat_bec: product.cat_bec,
    product_class_id: product.class?.id || '',
    expense_type_id: product.expense_type?.id || '',
    nat_gov: product.nat_gov ?? undefined,
    pdm: product.pdm ?? undefined,
    specifications: product.specifications ?? undefined,
  }
}

