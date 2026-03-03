<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    showBack: true,
    menu: {
      title: 'Demandas',
      hidden: false,
    },
  })
  const route = useRoute()
  const id = computed(() => route.params.id as string)
  const { get } = useDemand()
  const {
    data: demand,
    pending,
    error,
    refresh,
  } = await useAsyncData(`demand-${id.value}`, () => get(id.value))

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode ?? 500,
      message: 'Demanda não encontrada',
      fatal: true,
    })
  }
</script>

<template>
  <ui-page :title="demand?.description">
    <ui-card-grid v-if="pending">Carregando...</ui-card-grid>
    <div v-else-if="error">Da um refresh <ui-btn @click="refresh()">Refresh</ui-btn></div>
    <ui-card-grid v-else>
      <div>Data do cadastro: {{ dateBr(demand!.created_at) }}</div>
      <div>Data do Da Eleição: {{ dateBr(demand!.dispute_date) }}</div>
    </ui-card-grid>
  </ui-page>
</template>
