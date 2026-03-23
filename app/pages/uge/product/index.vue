<script setup lang="ts">
  import { AppError } from '~/error/AppError'

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

  const { fetchAll } = useProduct()

  const {
    data: products,
    error,
    status,
  } = useAsyncData('products', async () => {
    try {
      return await fetchAll()
    } catch (error) {
      if (error instanceof AppError) {
        throw createError({ statusCode: 400, message: error.message })
      }
      throw createError({
        statusCode: 500,
        message: 'Erro inesperado ao carregar os produtos',
      })
    }
  })
</script>

<template>
  <ui-page title="Produtos">
    <template #header_action
      ><ui-btn color="primary" icon="plus" to="./product/new">Novo Produto</ui-btn>
    </template>
    <ui-alert v-if="error" :title="error.message" type="error" />
    <ui-list v-else :items="products || []" lines="two" :status="status">
      <ui-list-item v-for="product in products" :key="product.id">
        <template #title> {{ product.name }}</template>
        <template #subtitle> {{ product.description }} </template>
        <template #prepend> <ui-btn-icon icon="eye" :to="`./product/${product.id}`" /></template>
      </ui-list-item>
    </ui-list>
    <pre
      >{{ products }}
    </pre>
  </ui-page>
</template>
