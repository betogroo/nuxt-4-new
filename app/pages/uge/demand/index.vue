<script setup lang="ts">
  import { AppError } from '~/error/AppError'
  import type { Icon } from '~/types'

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

  const {
    data: demands,
    error,
    status,
  } = useAsyncData('demands', async () => {
    try {
      return await fetchAll()
    } catch (error) {
      if (error instanceof AppError) {
        throw createError({ statusCode: 400, statusMessage: error.message })
      }
      throw createError({
        statusCode: 500,
        statusMessage: 'Erro inesperado ao carregar as demandas',
      })
    }
  })
  const iconList = ref<Icon[]>(['eye', 'settings', 'update'])
  const formatted = computed(() => JSON.stringify(demands.value, null, 2))
</script>

<template>
  <ui-page>
    <template #header_action
      ><ui-btn color="primary" icon="plus" to="./demand/new">Novo Processo</ui-btn>
    </template>
    <ui-alert v-if="error" :title="error.statusMessage" type="error" />

    <ui-list v-else :items="demands || []" lines="two" :status="status">
      <ui-list-item v-for="demand in demands" :key="demand.id">
        <template #title> {{ demand.description }}</template>
        <template #subtitle>
          Processo número
          {{ format.demandNumber(demand.internal_process_number, demand.year) }}</template
        >
        <template #prepend> <ui-btn-icon icon="eye" /></template>
        <template #actions
          ><ui-btn-icon v-for="icon in iconList" :key="icon" compact :icon="icon" size="small" />
        </template>
      </ui-list-item>
    </ui-list>
    <pre>{{ formatted }}</pre>
  </ui-page>
</template>
