<script setup lang="ts">
  interface Props {
    count?: number
  }
  const { count = 1 } = defineProps<Props>()
</script>

<template>
  <v-skeleton-loader v-for="n in count" :key="`skeleton-loader-${n}`" v-bind="$attrs" />
</template>
