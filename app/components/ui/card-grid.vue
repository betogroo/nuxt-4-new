<script setup lang="ts">
  import type { GridDirection } from '~/types/ui/grid'

  interface Props {
    direction?: GridDirection
  }

  const { direction = 'row' } = defineProps<Props>()
</script>

<template>
  <div
    class="d-flex flex-wrap justify-space-around my-2 ga-2"
    :class="direction === 'column' ? 'flex-column' : ''"
  >
    <slot />
  </div>
</template>
