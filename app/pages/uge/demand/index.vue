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

  const errorMessage = ref<string | null>(null)

  const { demands, isFetching, fetchAll } = useDemand()

  onMounted(async () => {
    try {
      await fetchAll()
    } catch (error) {
      if (error instanceof AppError) {
        errorMessage.value = error.message
      } else {
        errorMessage.value = 'Erro inesperado ao carregar demandas'
      }
    }
  })

  const iconList = ref<Icon[]>(['eye', 'settings', 'update'])
</script>

<template>
  <ui-page>
    <ui-alert v-if="errorMessage" :title="errorMessage" type="error" />

    <ui-list v-else :is-loading="isFetching" :items="demands" lines="two">
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
