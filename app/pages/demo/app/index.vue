<script setup lang="ts">
  definePageMeta({
    layout: 'default',

    menu: {
      title: 'App',
      hidden: false,
      icon: 'settings',
      areas: ['navbar'],
    },
  })

  const { data: app } = await useAsyncData(() =>
    queryCollection('app').select('title', 'meta', 'id').all(),
  )
  console.log(app.value)
</script>

<template>
  <div>
    <ui-heading :level="3">APP</ui-heading>
    <ul>
      <li v-for="item in app" :key="item.id">
        <nuxt-link :to="`./app/${item.meta.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
