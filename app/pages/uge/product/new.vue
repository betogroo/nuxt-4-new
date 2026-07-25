<script setup lang="ts">
  import { ProductInsertSchema } from '~/schemas/uge/dto/product.insert.dto'
  import type { ProductForm } from '~/schemas/uge/forms/product.form.schema'

  const { create } = useProduct()
  const productToCreate = ref<ProductForm | null>(null)

  const { execute, status, error } = useAsyncAction(async () => {
    if (!productToCreate.value) {
      throw new Error('Dados não informados')
    }
    const parsed = ProductInsertSchema.parse({
      ...productToCreate.value,
    })

    return await create(parsed)
  })

  const createProduct = async (data: ProductForm) => {
    productToCreate.value = data
    const result = await execute()
    if (result) await navigateTo(`/uge/product/`)
  }
</script>

<template>
  <ui-page show-back title="Nova Produto">
    <ui-alert v-if="error" title="Error" type="error">{{ error.message }}</ui-alert>
    <uge-form-product :status="status" @submit="createProduct" />
  </ui-page>
</template>
