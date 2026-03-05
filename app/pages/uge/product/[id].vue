<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Produto',
      hidden: true,
    },
  })

  const { params } = useRoute()
  const id = computed(() => params.id as string)
</script>

<template>
  <ui-page title="Produto">{{ id }}</ui-page>
</template>
