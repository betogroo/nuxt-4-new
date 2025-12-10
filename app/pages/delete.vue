<script setup lang="ts">
  definePageMeta({
    menu: {
      title: 'Delete',
      hidden: false,
      areas: ['drawer', 'navbar'],
      icon: 'mdi-delete',
      priority: {
        drawer: MENU_ORDER.DRAWER.DELETE,
        navbar: MENU_ORDER.DRAWER.DELETE,
      },
    },
  })
</script>
<template>
  <div><h1>About</h1></div>
</template>
