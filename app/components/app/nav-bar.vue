<script setup lang="ts">
  import { AppError } from '~/error/AppError'

  const route = useRoute()
  const { getMenuByArea } = useNavigation()
  const { signout } = useAuth()
  const { notify } = useNotification()
  const user = useSupabaseUser()
  const navbarItems = getMenuByArea('navbar')

  const logout = async () => {
    try {
      await signout()
      notify('Desconectado com sucesso com sucesso. REDIRECIONANDO', 'success', { timeout: 2000 })
      navigateTo('/login')
    } catch (error) {
      if (error instanceof AppError) {
        notify(error.message, 'error')
        return
      }
      notify('Erro inesperado. Tente mais tarde', 'error', { timeout: 2000 })
    }
  }
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-title class="d-flex align-center">
      <ui-link-back v-if="route.meta.showBack" icon />
      <span>Nuxt App = {{ user?.email }} </span>
    </v-app-bar-title>

    <div class="d-flex mr-3">
      <ui-btn-icon
        v-for="item in navbarItems"
        :key="item?.path"
        :aria-label="item.menu?.title"
        :icon="item?.menu?.icon"
        :to="item?.path"
      />
      <ui-btn-icon v-if="user" icon="logout" @click="logout" /></div
  ></v-app-bar>
</template>
