<script setup lang="ts">
  definePageMeta({
    menu: {
      title: 'Delete',
      hidden: false,
      areas: ['drawer', 'navbar'],
      icon: 'mdi-delete',
      priority: {
        navbar: 'delete',
        drawer: 'delete',
      },
    },
  })
</script>
<template>
  <div><h1>About</h1></div>
</template>
