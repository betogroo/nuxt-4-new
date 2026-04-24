<script setup lang="ts">
  const { params } = useRoute()
  const id = computed(() => params.id as string)
</script>

<template>
  <ui-page show-back title="Edit">{{ id }}</ui-page>
</template>
