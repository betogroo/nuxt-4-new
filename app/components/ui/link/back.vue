<script setup lang="ts">
  interface Props {
    fallback?: string
  }
  const { fallback = '/' } = defineProps<Props>()

  const router = useRouter()
  const goBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push(fallback ?? '/')
    }
  }
</script>

<template>
  <ui-btn variant="text" @click="goBack">Voltar</ui-btn>
</template>
