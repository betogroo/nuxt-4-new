<script setup lang="ts">
  const router = useRouter()
  const goBack = () => router.back()
</script>

<template>
  <ui-btn variant="text" @click="goBack">Voltar</ui-btn>
</template>
