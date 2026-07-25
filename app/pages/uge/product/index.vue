<script setup lang="ts">
  import { ProductInsertSchema } from '~/schemas/uge/dto/product.insert.dto'
  import type { ProductForm } from '~/schemas/uge/forms/product.form.schema'

  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Produtos',
      hidden: false,
      icon: 'product',
      areas: ['navbar'],
      priority: 'products',
    },
  })

  const productToCreate = ref<ProductForm | null>()

  const { fetchAll: fetchAllProducts, create } = useProduct()
  const { isOpen, openDialog, closeDialog } = useDialog()

  const {
    data: products,
    error,
    status,
    refresh,
  } = useAsyncData('products', async () => await fetchAllProducts())
  if (error.value) handleAsyncError(error.value)
  const productsSafe = computed(() => products.value || [])
  const menuAction = () => {
    alert('Open Menu')
  }

  const { execute, status: createStatus } = useAsyncAction(async () => {
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
    //await navigateTo(`/uge/product/${result.id}`)
    if (result) {
      closeDialog()
      refresh()
    }
  }
  const deleteProduct = (id: string) => {
    alert(`Vai deletar o ${id}`)
  }
</script>

<template>
  <ui-page title="Produtos">
    <template #header_action
      ><ui-btn color="primary" icon="plus" @click="openDialog">Novo Produto</ui-btn>
    </template>
    <ui-dialog v-model="isOpen">
      <uge-form-product :status="createStatus" @submit="createProduct" />
    </ui-dialog>
    <ui-alert v-if="error" :title="error.message" type="error" />
    <ui-list v-else :items="productsSafe" lines="two" :status="status">
      <ui-list-item
        v-for="product in productsSafe"
        :key="product.id"
        :subtitle="product.class.name"
        :title="product.name"
        :to="`/uge/product/${product.id}`"
      >
        <template #middle1>
          <div>
            <ui-heading :level="4" @click.stop="menuAction">Middle 1</ui-heading>
            <ui-heading :level="6">Middle 1</ui-heading>
          </div></template
        >
        <template #middle2>
          <div>
            <ui-heading :level="4">Middle 2</ui-heading>
            <ui-heading :level="6">Middle 2</ui-heading>
          </div></template
        >
        <template #actions
          ><ui-btn-icon icon="delete" @click.stop.prevent="deleteProduct(product.id)"
        /></template>
      </ui-list-item>
    </ui-list>
  </ui-page>
</template>
