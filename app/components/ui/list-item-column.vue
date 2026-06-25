<script setup lang="ts">
  import type { GridSize } from '~/types/ui/grid'
  defineProps<Props>()

  interface Props {
    cols?: GridSize
    sm?: GridSize
    md?: GridSize
  }
</script>

<template>
  <v-col class="d-flex flex-column justify-center px-2" :cols="cols || 12" :sm="sm">
    <slot />
    <ui-divider class="mt-6 d-sm-none" />
  </v-col>
</template>
