<script setup lang="ts">
  definePageMeta({
    menu: {
      title: 'Cat',
      hidden: false,
      areas: ['drawer', 'navbar'],
      icon: 'mdi-cat',
      priority: {
        drawer: MENU_ORDER.DRAWER.CAT,
      },
    },
  })
</script>
<template>
  <div><h1>About</h1></div>
</template>
