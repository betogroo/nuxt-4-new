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
  <div v-if="product">
    <ui-page show-back>
      <template #header_action><ui-btn>Editar</ui-btn></template>
      <template #title>
        <div class="d-flex align-center">
          <ui-heading :level="5">{{ product.name }}</ui-heading
          ><v-chip class="ml-2" color="success" label>Ativo</v-chip>
        </div>
      </template>

      <v-row>
        <v-col cols="12" sm="8">
          <div class="d-flex flex-column ga-2">
            <ui-card title="Descrição">
              <p>{{ product.description }}</p>
            </ui-card>
            <ui-card title="Especificações">
              <template #actions><ui-btn>Adicionar</ui-btn></template>
              <div class="d-flex justify-space-around flex-wrap">
                <v-chip
                  v-for="(value, key) in product.specifications"
                  :key="key"
                  class="ma-2"
                  label
                >
                  {{ `${key}: ${value}` }}</v-chip
                >
              </div>
            </ui-card>
          </div></v-col
        >
        <v-col cols="12" sm="4">
          <ui-card title="Unidades de Medida">
            <template #actions> <ui-btn>Adicionar</ui-btn></template>
            <ui-list>
              <ui-list-item v-for="item in product.packaging_types" :key="item.id">
                <template #title>{{ item.name }}</template>
                <template #subtitle>{{ item.name_bec }}</template>
              </ui-list-item>
            </ui-list>
          </ui-card>
        </v-col>

        <v-col cols="12">
          <ui-card title="Informações">
            <div class="d-flex justify-space-around flex-wrap ga-3 my-2">
              <ui-card height="75" width="200"
                ><h4>Código Compras</h4>
                {{ product.cat_mat }}</ui-card
              >
              <ui-card height="75" width="200"
                ><h4>Código BEC</h4>
                {{ product.cat_bec }}</ui-card
              >
              <ui-card height="75" width="200"
                ><h4>PDM</h4>
                {{ product.pdm }}</ui-card
              >
              <ui-card height="75" width="200"
                ><h4>Classe - {{ product.class.code }}</h4>
                {{ product.class.name }}</ui-card
              >
              <ui-card height="75" width="200"
                ><h4>Natureza da Despesa</h4>
                {{ product.expense_type.expense_number }}</ui-card
              >
            </div>
          </ui-card>
        </v-col>
      </v-row>
      {{ product }}
    </ui-page>
  </div>
</template>
