<script setup lang="ts">
  import { AppError } from '~/error/AppError'

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
</script>

<template>
  <ui-page>
    <ui-card-grid v-if="isFetching"
      ><ui-skeleton-loader :count="SKELETON_LOADER_COUNT.image" type="image" width="350"
    /></ui-card-grid>
    <ui-alert v-else-if="errorMessage" :title="errorMessage" type="error" />
    <div v-else-if="!demands?.length">Ainda não tem demandas cadastradas</div>
    <v-list v-else>
      <v-list-item v-for="demand in demands" :key="demand.id">{{ demand.description }}</v-list-item>
    </v-list>
  </ui-page>
</template>
