<script setup lang="ts">
  import type { Status } from '~/schemas/ui'

  interface Props<T> {
    status?: Status
    items?: T[]
  }
  defineProps<Props<unknown>>()
</script>

<template>
  <div class="ui-list-container" v-bind="$attrs">
    <template v-if="status === 'pending'">
      <div class="d-flex flex-column ga-3">
        <ui-skeleton-loader :count="4" type="list-item-two-line" />
      </div>
    </template>
    <div v-else-if="status === 'success' && !items?.length" class="ui-list-empty py-6 text-center">
      <v-icon class="mb-2" color="warning" icon="mdi-database-search-outline" size="48" />
      <ui-heading align="center" :level="5" weight="medium">Nenhum registro encontrado</ui-heading>
      <p class="text-caption text-medium-emphasis mt-1">Não há dados cadastrados no momento.</p>
    </div>
    <div
      v-else-if="status === 'success' || status === undefined"
      class="d-flex flex-column ga-3 ga-sm-4"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .ui-list-container {
    width: 100%;
  }
</style>
