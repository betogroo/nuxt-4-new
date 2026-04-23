<script setup lang="ts">
  import type { ProductReadDetails } from '~/types'

  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Produto',
      hidden: true,
    },
  })

  const { params } = useRoute()
  const id = computed(() => params.id as string)
  const { get } = useProduct()
  const { data: product } = await useAsyncData(`product-${id.value}`, () => get(id.value), {
    default: () => ({}) as ProductReadDetails,
  })
</script>

<template>
  <ui-page v-if="product" :title="product.name">
    <div>
      <h2>Informações</h2>
      <div class="d-flex justify-space-around flex-wrap ga-3 my-2">
        <ui-card height="100" width="200"
          ><h4>Código Compras</h4>
          {{ product.cat_mat }}</ui-card
        >
        <ui-card height="100" width="200"
          ><h4>Código BEC</h4>
          {{ product.cat_bec }}</ui-card
        >
        <ui-card height="100" width="200"
          ><h4>PDM</h4>
          {{ product.pdm }}</ui-card
        >
      </div>
      <div class="d-flex justify-space-around flex-wrap ga-3 my-2">
        <ui-card height="100" width="200"
          ><h4>Classe</h4>
          {{ product.class.name }}</ui-card
        >
        <ui-card height="100" width="250"
          ><h4>Classe</h4>
          {{ product.expense_type.expense_number }}</ui-card
        >
      </div>
      <div>
        <ui-list>
          <ui-list-item v-for="item in product.packaging_types" :key="item.id">
            <template #title>{{ item.name }}</template>
            <template #subtitle>{{ item.name_bec }}</template>
          </ui-list-item>
          <ui-btn>Adicionar</ui-btn>
        </ui-list>
      </div>
    </div>
    <div>
      <pre>
        {{ product }}
      </pre>
    </div>
  </ui-page>
</template>
