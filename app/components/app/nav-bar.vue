<script setup lang="ts">
  const { getMenuByArea } = useNavigation()
  const navbarItems = getMenuByArea('navbar')
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-title>Nuxt App</v-app-bar-title>
    <div class="d-flex ga- mr-3">
      <v-btn
        v-for="item in navbarItems"
        :key="item?.path"
        :icon="item?.menu?.icon"
        :ripple="false"
        :to="item?.path"
        variant="plain"
      /></div
  ></v-app-bar>
</template>
