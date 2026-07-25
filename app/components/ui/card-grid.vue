<script setup lang="ts">
  import type { GridDirection } from '~/schemas/ui'

  interface Props {
    direction?: GridDirection
    width?: string | number
  }

  const { direction = 'row', width = undefined } = defineProps<Props>()
</script>

<template>
  <v-sheet
    class="d-flex flex-wrap justify-space-around my-2 ga-2"
    :class="direction === 'column' ? 'flex-column' : ''"
    :width="width"
  >
    <slot />
  </v-sheet>
</template>
