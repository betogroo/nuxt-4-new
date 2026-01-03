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
  <div>
    <h1>{{ testStore.upperTitle }} - About</h1>
  </div>
</template>
