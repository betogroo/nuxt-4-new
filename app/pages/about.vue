<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Sobre',
      hidden: false,
      areas: ['navbar', 'drawer'],
      icon: 'about',
      priority: 'about',
    },
  })
</script>

<template>
  <ui-page :title="`About Page`" />
</template>
