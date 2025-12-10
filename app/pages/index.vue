<script setup lang="ts">
  definePageMeta({
    menu: {
      title: 'Home Page',
      areas: ['navbar', 'drawer'],
      hidden: false,
      icon: 'mdi-home',
      priority: {
        drawer: MENU_ORDER.DRAWER.INDEX,
        navbar: MENU_ORDER.NAVBAR.INDEX,
      },
    },
  })
  const { getMenuByArea } = useNavigation()
  const drawerItems = getMenuByArea('drawer')
</script>
!
<template>
  <div>
    <h1>Home Page</h1>
    <div class="d-flex ga- mr-3">
      <v-btn
        v-for="item in drawerItems"
        :key="item?.path"
        :icon="item?.menu?.icon"
        :ripple="false"
        :to="item?.path"
        variant="plain"
      />
    </div>
  </div>
</template>
