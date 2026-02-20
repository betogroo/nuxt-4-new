<script setup lang="ts">
  definePageMeta({
    layout: 'default',

    menu: {
      title: 'Componentes',
      hidden: false,
      icon: 'plus',
      areas: ['content'],
    },
  })

  const { data: ui } = await useAsyncData(() =>
    queryCollection('ui').select('title', 'meta', 'id').all(),
  )
  console.log(ui.value)
</script>

<template>
  <ui-page show-back title="ComponentesP">
    <ui-heading :level="3">ui</ui-heading>
    <ul>
      <li v-for="item in ui" :key="item.id">
        <nuxt-link :to="`./components/${item.meta.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </ui-page>
</template>
