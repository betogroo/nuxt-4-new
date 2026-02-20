<script setup lang="ts">
  definePageMeta({
    layout: 'default',

    menu: {
      title: 'Banco de Dados',
      hidden: false,
      icon: 'db',
      areas: ['navbar'],
    },
  })

  const { data: db } = await useAsyncData(() =>
    queryCollection('db').select('title', 'meta', 'id').all(),
  )
  console.log(db.value)
</script>

<template>
  <div>
    <ui-heading :level="3">DB</ui-heading>
    <ul>
      <li v-for="item in db" :key="item.id">
        <nuxt-link :to="`./db/${item.meta.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
