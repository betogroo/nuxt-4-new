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
</script>

<template>
  <ui-page>
    <ui-alert v-if="error" :title="error.statusMessage" type="error" />

    <ui-list v-else :items="demands || []" lines="two" :status="status">
      <ui-list-item v-for="demand in demands" :key="demand.id">
        <template #title> {{ demand.description }}</template>
        <template #subtitle> {{ demand.object_types?.name }}</template>
        <template #prepend> <ui-btn-icon icon="eye" /></template>
        <template #actions
          ><ui-btn-icon v-for="icon in iconList" :key="icon" compact :icon="icon" size="small" />
        </template>
      </ui-list-item>
    </ui-list>
  </ui-page>
</template>
