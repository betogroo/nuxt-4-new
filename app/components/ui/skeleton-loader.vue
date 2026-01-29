<script setup lang="ts">
  import type { SkeletonLoaderType } from '~/types/ui/skeleton-loader'

  interface Props {
    type: SkeletonLoaderType
    width: string
    count?: number
  }
  const { count = 1 } = defineProps<Props>()
</script>

<template>
  <v-skeleton-loader
    v-for="n in count"
    :key="`skeleton-loader-${n}`"
    loading
    :type="type"
    width="350"
  />
</template>
