<script setup lang="ts">
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

  //const { fetchAll } = useProduct()
  const router = useRouter()
  const { fetchAll: fetchAllProducts } = useProduct()

  const {
    data: products,
    error,
    status,
  } = useAsyncData('products', async () => await fetchAllProducts())
  if (error.value) handleAsyncError(error.value)
  const productsSafe = computed(() => products.value || [])
  const menuAction = () => {
    alert('Open Menu')
  }

  const openProduct = (id: string | number) => {
    router.push(`./product/${id}`)
    console.log(id)
  }
</script>

<template>
  <ui-page title="Produtos">
    <template #header_action
      ><ui-btn color="primary" icon="plus" to="./product/new">Novo Produto</ui-btn>
    </template>
    <ui-alert v-if="error" :title="error.message" type="error" />
    <ui-list v-else :items="productsSafe" lines="two" :status="status">
      <ui-list-item
        v-for="product in productsSafe"
        :key="product.id"
        clickable
        :subtitle="product.class.name"
        :title="product.name"
        @click="openProduct(product.id)"
        @menu-click="menuAction"
      >
        <template #middle1>
          <div>
            <ui-heading :level="4">Middle 1</ui-heading>
            <ui-heading :level="6">Middle 1</ui-heading>
          </div></template
        >
        <template #middle2>
          <div>
            <ui-heading :level="4">Middle 2</ui-heading>
            <ui-heading :level="6">Middle 2</ui-heading>
          </div></template
        >
      </ui-list-item>
    </ui-list>
  </ui-page>
</template>
