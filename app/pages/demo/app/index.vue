<script setup lang="ts">
  definePageMeta({
    layout: 'default',

    menu: {
      title: 'App',
      hidden: false,
      icon: 'settings',
      areas: ['content'],
    },
  })

  const { data: app } = await useAsyncData(() =>
    queryCollection('app').select('title', 'meta', 'id').all(),
  )
  console.log(app.value)
</script>

<template>
  <ui-page show-back title="APP">
    <ul>
      <li v-for="item in app" :key="item.id">
        <nuxt-link :to="`./app/${item.meta.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </ui-page>
</template>
