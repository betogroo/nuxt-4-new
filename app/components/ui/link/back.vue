<script setup lang="ts">
  interface Props {
    fallback?: string
    icon?: boolean
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
  <ui-btn v-if="!icon" :prepend-icon="ICONS['back']" variant="text" @click="goBack">Voltar</ui-btn>
  <ui-btn-icon v-else icon="back" @click="goBack" />
</template>
