<script setup lang="ts">
  const notificationStore = useNotificationStore()
  const { isOpen, text, type } = storeToRefs(notificationStore)
</script>

<template>
  <v-snackbar v-model="isOpen" :color="type" :timeout="2000">
    {{ text }}

    <template #actions>
      <ui-btn variant="text" @click="notificationStore.close">Fechar</ui-btn>
    </template>
  </v-snackbar>
</template>
