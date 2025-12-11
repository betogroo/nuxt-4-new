<script setup lang="ts">
  definePageMeta({
    menu: {
      title: 'Home Page',
      areas: ['navbar', 'drawer'],
      hidden: false,
      icon: 'mdi-home',
      priority: 'index',
    },
  })
  const { getMenuByArea } = useNavigation()
  const drawerItems = getMenuByArea('drawer')

  const { $pwaInstall } = useNuxtApp()

  const showButton = ref(false)

  onMounted(() => {
    window.addEventListener('pwa-install-available', () => {
      showButton.value = true
    })
  })

  const install = async () => {
    const result = await $pwaInstall()
    console.log('Resultado da instalação:', result)
  }
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
    <v-btn @click="install">Instalar</v-btn>
  </div>
</template>
