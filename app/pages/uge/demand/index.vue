<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Demandas',
      hidden: false,
      icon: 'currency',
      areas: ['navbar'],
      priority: 'demand',
    },
  })

  const { fetchAll } = useDemand()
  const { data: demands, error, status } = useAsyncData('demands', async () => await fetchAll())
  if (error.value) handleAsyncError(error.value)
  const demandsSafe = computed(() => demands.value ?? [])

  const menuAction = () => {
    console.log('Menu Action')
  }
</script>

<template>
  <ui-page>
    <template #header_action
      ><ui-btn color="primary" icon="plus" to="./demand/new">Novo Processo</ui-btn>
    </template>
    <ui-alert v-if="error" :title="error.message" type="error" />

    <ui-list v-else :items="demandsSafe || []" lines="two" :status="status">
      <ui-list-item v-for="demand in demandsSafe" :key="demand.id" @menu-click="menuAction">
        <template #title> {{ demand.description }}</template>
        <template #subtitle>
          Processo número
          {{ demand.internal_process_number }} Criado por {{ demand.owner?.name || '' }}</template
        >
      </ui-list-item>
    </ui-list>
    {{ error }}
  </ui-page>
</template>
