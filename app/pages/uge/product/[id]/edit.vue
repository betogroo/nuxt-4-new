<script setup lang="ts">
  import { ProductInsertSchema } from '~/schemas/uge/dto/product.insert.dto'
  import type { ProductForm } from '~/schemas/uge/forms/product.form.schema'
  import { toProductForm, toProductUpdate } from '~/schemas/uge/mappers/product.mapper'

  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Editar Produto',
      hidden: false,
    },
  })

  const route = useRoute()
  const id = computed(() => route.params.id as string)

  const { get, update } = useProduct()
  const { notify } = useNotification()

  const product = await get(id.value)
  const initialValues = computed(() => (product ? toProductForm(product) : undefined))
  const productToUpdate = ref<ProductForm | null>(null)

  const {
    execute,
    status: updateStatus,
    error,
  } = useAsyncAction(async () => {
    if (!productToUpdate.value) {
      throw new Error('Dados não informados')
    }

    const updatePayload = toProductUpdate(productToUpdate.value)
    const parsed = ProductInsertSchema.partial().parse(updatePayload)
    return await update(id.value, parsed)
  })

  const editProduct = async (data: ProductForm) => {
    productToUpdate.value = data
    const result = await execute()

    if (result) {
      notify(`Produto "${result.name}" atualizado com sucesso`, 'success')
      await navigateTo(`/uge/product/${result.id}`)
    } else {
      notify('Erro ao atualizar produto', 'error')
    }
  }
</script>

<template>
  <ui-page show-back title="Editar Produto">
    <ui-alert v-if="error" :title="error.message" type="error" />
    <uge-form-product
      v-if="product"
      :initial-values="initialValues"
      :status="updateStatus"
      @submit="editProduct"
    />
  </ui-page>
</template>
