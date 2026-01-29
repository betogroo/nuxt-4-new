<script setup lang="ts">
  import type { NuxtError } from '#app'
  defineProps<{
    error: NuxtError
  }>()

  const imgSrc = new URL('~/assets/img/404.png', import.meta.url).href
</script>
<template>
  <app-public-container>
    <ui-empty-state :img-src="imgSrc" :text="error.message" :title="`Erro ${error.statusCode}`" />
  </app-public-container>
</template>
