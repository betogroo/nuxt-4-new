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
  const { fetchAll: fetchAllProducts } = useProduct()

  const {
    data: products,
    error,
    status,
  } = useAsyncData('products', async () => await fetchAllProducts())
  if (error.value) handleAsyncError(error.value)
  const productsSafe = computed(() => products.value || [])
</script>

<template>
  <ui-page title="Produtos">
    <template #header_action
      ><ui-btn color="primary" icon="plus" to="./product/new">Novo Produto</ui-btn>
    </template>
    <ui-alert v-if="error" :title="error.message" type="error" />
    <ui-list v-else :items="productsSafe" lines="two" :status="status">
      <ui-list-item v-for="product in productsSafe" :key="product.id">
        <template #title> {{ product.name }}</template>
        <template #subtitle> {{ `${product.class.name}` }} </template>
      </ui-list-item>
    </ui-list>
    <pre
      >{{ products }}
    </pre>
    <pre
      >{{ productsSafe }}
    </pre>
  </ui-page>
</template>
