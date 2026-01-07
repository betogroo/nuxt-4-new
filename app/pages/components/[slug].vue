<script setup lang="ts">
  const route = useRoute()
  const { data: ui } = await useAsyncData(() =>
    queryCollection('ui').path(`/ui/${route.params.slug}`).first(),
  )
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Ui Notifications',
      hidden: false,
      areas: ['components'],
      priority: 'notifications',
    },
  })

  if (!ui.value) {
    throw createError({ statusCode: 404 })
  }

  console.log(ui.value)
</script>

<template>
  <article v-if="ui">
    <ContentRenderer v-if="ui" :value="ui" />
    <ui-link-back />
  </article>
</template>
