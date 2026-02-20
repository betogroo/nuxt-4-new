<script setup lang="ts">
  definePageMeta({
    layout: 'default',

    menu: {
      title: 'Banco de Dados',
      hidden: false,
      icon: 'db',
      areas: ['content'],
    },
  })

  const { data: db } = await useAsyncData(() =>
    queryCollection('db').select('title', 'meta', 'id').all(),
  )
  console.log(db.value)
</script>

<template>
  <ui-page show-back title="APP">
    <ul>
      <li v-for="item in db" :key="item.id">
        <nuxt-link :to="`./db/${item.meta.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </ui-page>
</template>
