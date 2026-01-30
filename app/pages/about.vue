<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Sobre',
      hidden: false,
      areas: ['navbar', 'drawer'],
      icon: 'about',
      priority: 'about',
    },
  })

  const testStore = useTestStore()
</script>
<template>
  <ui-page>
    <template #title>
      <ui-link-back />
      <ui-heading :level="3"> {{ testStore.upperTitle }} - About </ui-heading>
    </template>
  </ui-page>
  <div />
</template>
