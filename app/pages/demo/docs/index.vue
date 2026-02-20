<script setup lang="ts">
  definePageMeta({
    layout: 'default',

    menu: {
      title: 'Docs',
      hidden: false,
      icon: 'doc',
      areas: ['content'],
    },
  })

  const { data: docs } = await useAsyncData(() =>
    queryCollection('docs').select('title', 'meta', 'id').all(),
  )
  console.log(docs.value)
</script>

<template>
  <ui-page show-back title="DocumentosP">
    <ul>
      <li v-for="item in docs" :key="item.id">
        <nuxt-link :to="`./docs/${item.meta.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </ui-page>
</template>
