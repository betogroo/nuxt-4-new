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
    <pre>{{ JSON.stringify(drawerItems, null, 2) }}</pre>
  </div>
</template>
