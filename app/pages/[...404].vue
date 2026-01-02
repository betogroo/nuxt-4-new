<script setup lang="ts">
  const imgSrc = new URL('~/assets/img/404.png', import.meta.url).href
  definePageMeta({
    name: '404',
    title: '404 - Not Found',
    layout: 'no-nav',
  })
</script>

<template>
  <app-public-container>
    <ui-empty-state
      :img-src="imgSrc"
      text="A chave se quebrou e a página não foi encontrada."
      title="Oooops! Algo deu errado"
  /></app-public-container>
</template>
