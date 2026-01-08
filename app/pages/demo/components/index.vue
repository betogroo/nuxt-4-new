<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Componentes',
      hidden: false,
      icon: 'plus',
      areas: ['navbar'],
    },
  })

  const { data: ui } = await useAsyncData(() =>
    queryCollection('ui').select('title', 'meta', 'id').all(),
  )
  console.log(ui.value)
</script>

<template>
  <div>
    <ui-heading :level="3">Componentes</ui-heading>
    <ul>
      <li v-for="item in ui" :key="item.id">
        <nuxt-link :to="`./components/${item.meta.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
