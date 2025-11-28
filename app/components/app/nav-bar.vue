<script setup lang="ts">
  const appBarItems = [
    {
      name: 'Home',
      to: '/',
      icon: 'mdi-home',
    },
    {
      name: 'About',
      to: '/about',
      icon: 'mdi-information',
    },
  ]
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-title>Nuxt App</v-app-bar-title>
    <div class="d-flex ga-2 mr-3">
      <v-btn
        v-for="item in appBarItems"
        :key="item.name"
        :icon="item.icon"
        :ripple="false"
        size="24"
        :to="item.to"
        variant="plain"
      /></div
  ></v-app-bar>
</template>
