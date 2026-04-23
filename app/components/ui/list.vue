<script setup lang="ts">
  import type { Status } from '~/types'

  interface Props<T> {
    status?: Status
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
    <template v-else-if="status === 'success' || status === undefined">
      <slot />
    </template>
  </v-list>
</template>
