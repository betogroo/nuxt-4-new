<script setup lang="ts">
  interface Props<T> {
    isLoading: boolean
    hasFetched: boolean
    items?: T[]
  }
  defineProps<Props<unknown>>()
</script>

<template>
  <v-list v-bind="$attrs">
    <template v-if="isLoading">
      <ui-skeleton-loader :count="4" type="list-item-two-line" />
    </template>
    <div v-else-if="hasFetched && !items?.length">
      <ui-alert title="Não há dados cadastrados" type="warning" />
    </div>
    <template v-else>
      <slot />
    </template>
  </v-list>
</template>
