<script setup lang="ts">
  const notificationStore = useNotificationStore()
  const { isOpen, text, type } = storeToRefs(notificationStore)
</script>

<template>
  <v-snackbar v-model="isOpen" :color="type" :timeout="2000">
    {{ text }}

    <template #actions>
      <v-btn color="pink" variant="text" @click="notificationStore.close"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
