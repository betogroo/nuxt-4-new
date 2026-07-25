<script setup lang="ts">
  import { ProductInsertSchema } from '~/schemas/uge/dto/product.insert.dto'
  import type { ProductReadDetails } from '~/schemas/uge/dto/product.read.dto'
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

  const router = useRouter()
  const productToCreate = ref<ProductForm | null>()
  const selectedProductToDelete = ref<ProductReadDetails | null>(null)

  const { fetchAll: fetchAllProducts, create, remove, isDeleting } = useProduct()
  const { notify } = useNotification()
  const { isOpen, openDialog, closeDialog } = useDialog()
  const {
    openDialog: openDeleteDialog,
    isOpen: isDeleteDialogOpen,
    closeDialog: closeDeleteDialog,
  } = useDialog()

  const {
    data: products,
    error,
    status,
    refresh,
  } = useAsyncData('products', async () => await fetchAllProducts())
  if (error.value) handleAsyncError(error.value)
  const productsSafe = computed(() => products.value || [])

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
    if (result) {
      notify('Produto criado com sucesso', 'success')
      closeDialog()
      refresh()
    } else {
      notify('Erro ao criar produto', 'error')
    }
  }

  const { execute: executeDelete } = useAsyncAction(async () => {
    if (!selectedProductToDelete.value) {
      throw new Error('Produto não selecionado')
    }
    return await remove(selectedProductToDelete.value.id)
  })

  const confirmDeleteProduct = (product: ProductReadDetails) => {
    selectedProductToDelete.value = product
    openDeleteDialog()
  }

  const handleDeleteProduct = async () => {
    if (!selectedProductToDelete.value) return
    const deletedName = selectedProductToDelete.value.name
    const result = await executeDelete()
    if (result) {
      notify(`Produto "${deletedName}" excluído com sucesso`, 'success')
      closeDeleteDialog()
      selectedProductToDelete.value = null
      refresh()
    } else {
      notify('Erro ao excluir o produto', 'error')
    }
  }

  const editProduct = (id: string) => {
    router.push(`/uge/product/${id}/edit`)
  }
</script>

<template>
  <ui-page title="Produtos">
    <template #header_action
      ><ui-btn color="primary" icon="plus" @click="openDialog">Novo Produto</ui-btn>
    </template>

    <!-- Dialog de Criação -->
    <ui-dialog v-model="isOpen">
      <uge-form-product :status="createStatus" @submit="createProduct" />
    </ui-dialog>

    <!-- Dialog de Confirmação de Exclusão -->
    <ui-dialog
      v-model="isDeleteDialogOpen"
      title="Confirmar Exclusão"
      title-icon="delete"
      size="small"
    >
      Tem certeza que deseja excluir o produto
      <strong>"{{ selectedProductToDelete?.name }}"</strong>?
      <template #actions>
        <v-spacer />
        <ui-btn variant="text" :disabled="isDeleting" @click="closeDeleteDialog">Cancelar</ui-btn>
        <ui-btn color="error" :loading="isDeleting" @click="handleDeleteProduct">Excluir</ui-btn>
      </template>
    </ui-dialog>

    <ui-alert v-if="error" :title="error.message" type="error" />
    <ui-list v-else :items="productsSafe" lines="two" :status="status">
      <ui-list-item
        v-for="product in productsSafe"
        :key="product.id"
        :subtitle="product.class?.name || ''"
        :title="product.name"
        :to="`/uge/product/${product.id}`"
      >
        <template #actions>
          <ui-card-grid>
            <ui-btn-icon icon="delete" @click.stop.prevent="confirmDeleteProduct(product)" />
            <ui-btn-icon icon="edit" @click.stop.prevent="editProduct(product.id)" />
          </ui-card-grid>
        </template>
      </ui-list-item>
    </ui-list>
  </ui-page>
</template>

