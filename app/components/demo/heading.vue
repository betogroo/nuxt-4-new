<script setup lang="ts">
  import type { HeadingLevel } from '~/types'

  const levels: HeadingLevel[] = [1, 2, 3, 4, 5, 6]
</script>

<template>
  <ui-card-grid>
    <ui-heading v-for="level in levels" :key="level" :level="level">Level {{ level }}</ui-heading>
  </ui-card-grid>
</template>
