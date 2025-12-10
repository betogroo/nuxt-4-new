<script setup lang="ts">
  definePageMeta({
    menu: {
      title: 'Sobre',
      hidden: false,
      areas: ['navbar', 'drawer'],
      icon: 'mdi-information-outline',
      priority: {
        drawer: MENU_ORDER.DRAWER.ABOUT,
        navbar: MENU_ORDER.NAVBAR.ABOUT,
      },
    },
  })
</script>
<template>
  <div><h1>About</h1></div>
</template>
