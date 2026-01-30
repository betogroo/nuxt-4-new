<script setup lang="ts">
  interface Props {
    fallback?: string
  }
  const { fallback = '/' } = defineProps<Props>()

  const router = useRouter()
  const goBack = () => {
    if (router.options.history.state.back) {
      router.back()
    } else {
      navigateTo(fallback)
    }
  }
</script>

<template>
  <ui-btn :prepend-icon="ICONS['back']" variant="text" @click="goBack">Voltar</ui-btn>
</template>
