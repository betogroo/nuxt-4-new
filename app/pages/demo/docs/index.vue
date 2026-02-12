<script setup lang="ts">
  definePageMeta({
    layout: 'default',

    menu: {
      title: 'Docs',
      hidden: false,
      icon: 'doc',
      areas: ['navbar'],
    },
  })

  const { data: docs } = await useAsyncData(() =>
    queryCollection('docs').select('title', 'meta', 'id').all(),
  )
  console.log(docs.value)
</script>

<template>
  <div>
    <ui-heading :level="3">Docs</ui-heading>
    <ul>
      <li v-for="item in docs" :key="item.id">
        <nuxt-link :to="`./docs/${item.meta.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
