<script setup lang="ts">
  import type { BreadcrumbItem } from '~/types'

  interface Props {
    breadcrumbs: BreadcrumbItem[]
  }
  defineProps<Props>()
</script>

<template>
  <v-breadcrumbs :items="breadcrumbs" />
</template>
