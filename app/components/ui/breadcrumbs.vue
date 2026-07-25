<script setup lang="ts">
  import type { BreadcrumbItem } from '~/schemas/app/breadcrumb.schema'

  interface Props {
    breadcrumbs: BreadcrumbItem[]
  }
  defineProps<Props>()
</script>

<template>
  <v-breadcrumbs :items="breadcrumbs" />
</template>
