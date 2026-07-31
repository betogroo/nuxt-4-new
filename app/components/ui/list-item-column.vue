<script setup lang="ts">
  import type { GridSize } from '~/schemas/ui'
  defineProps<Props>()

  interface Props {
    cols?: GridSize
    sm?: GridSize
    md?: GridSize
  }
</script>

<template>
  <v-col
    class="d-flex flex-column justify-center px-2 py-1 py-sm-2"
    :cols="cols || 12"
    :md="md"
    :sm="sm"
  >
    <slot />
  </v-col>
</template>
