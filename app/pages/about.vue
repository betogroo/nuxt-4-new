<script setup lang="ts">
  definePageMeta({
    menu: {
      title: 'Sobre',
      hidden: false,
      areas: ['navbar', 'drawer'],
      icon: 'mdi-information-outline',
      priority: {
        navbar: 'about',
        drawer: 'about',
      },
    },
  })
</script>
<template>
  <div><h1>About</h1></div>
</template>
