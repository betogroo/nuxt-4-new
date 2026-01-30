<script setup lang="ts">
  const route = useRoute()
  const { getMenuByArea } = useNavigation()
  const navbarItems = getMenuByArea('navbar')
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-title class="d-flex align-center">
      <ui-link-back v-if="route.meta.showBack" icon />
      <span>Nuxt App </span>
    </v-app-bar-title>

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
