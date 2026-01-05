<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Sobre',
      hidden: false,
      areas: ['navbar', 'drawer'],
      icon: 'about',
      priority: 'about',
    },
  })

  const testStore = useTestStore()
  const notificationStore = useNotificationStore()
</script>
<template>
  <div>
    <h1>{{ testStore.upperTitle }} - About</h1>
    <ui-btn @click="notificationStore.open('Abrindo a partir do about', 'success')"
      >Abrir Notificação</ui-btn
    >
  </div>
</template>
