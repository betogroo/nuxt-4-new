<script setup lang="ts">
  interface Props<T> {
    status: 'idle' | 'pending' | 'success' | 'error'
    items?: T[]
  }
  defineProps<Props<unknown>>()
</script>

<template>
  <v-list v-bind="$attrs">
    <template v-if="status === 'pending'">
      <ui-skeleton-loader :count="4" type="list-item-two-line" />
    </template>
    <div v-else-if="status === 'success' && !items?.length">
      <ui-alert title="Não há dados cadastrados" type="warning" />
    </div>
    <template v-else-if="status === 'success'">
      <slot />
    </template>
  </v-list>
</template>
