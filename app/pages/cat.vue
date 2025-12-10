<script setup lang="ts">
  definePageMeta({
    menu: {
      title: 'Cat',
      hidden: false,
      areas: ['drawer', 'navbar'],
      icon: 'mdi-cat',
      priority: {
        navbar: 'cat',
        drawer: 'cat',
      },
    },
  })
</script>
<template>
  <div><h1>About</h1></div>
</template>
