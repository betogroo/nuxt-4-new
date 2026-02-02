<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    showBack: true,
    menu: {
      title: 'Election',
      hidden: false,
    },
  })
  const route = useRoute()

  const { get } = useElection()

  const id = computed(() => route.params.id as string)

  const {
    data: election,
    pending,
    error,
    refresh,
  } = await useAsyncData(`election-${id.value}`, () => get(id.value))

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode ?? 500,
      message: 'Eleição não encontrada',
      fatal: true,
    })
  }
</script>

<template>
  <ui-page show-back show-breadcrumb title="Eleição">
    <template #breadcrumb> aqui vai o breadcrumb </template>
    <ui-card-grid v-if="pending">Carregando...</ui-card-grid>
    <div v-else-if="error">Da um refresh <ui-btn @click="refresh()">Refresh</ui-btn></div>
    <ui-card-grid v-else>
      <div>{{ election }}</div>
    </ui-card-grid>
  </ui-page>
</template>
