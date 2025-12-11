<script setup lang="ts">
  useHead({
    link: [{ rel: 'manifest', href: '/manifest.webmanifest' }],
    meta: [{ name: 'theme-color', content: '#ffffff' }],
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <NuxtRouteAnnouncer />
  </NuxtLayout>
</template>
