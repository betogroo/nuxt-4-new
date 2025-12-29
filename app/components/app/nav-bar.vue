<script setup lang="ts">
  const { getMenuByArea } = useNavigation()
  const navbarItems = getMenuByArea('navbar')
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-title>Nuxt App</v-app-bar-title>
    <div class="d-flex mr-3">
      <ui-btn-icon
        v-for="item in navbarItems"
        :key="item?.path"
        :aria-label="item.menu?.title"
        :icon="item?.menu?.icon"
        :to="item?.path"
      /></div
  ></v-app-bar>
</template>
