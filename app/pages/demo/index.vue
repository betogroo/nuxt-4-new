<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    middleware: 'auth',
    menu: {
      title: 'Demonstração',
      hidden: false,
    },
  })
</script>

<template>
  <ui-heading>Demonstração</ui-heading>
  <ul>
    <li>
      <nuxt-link to="./demo/components">Componentes</nuxt-link>
    </li>
  </ul>
</template>
