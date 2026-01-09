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
</script>

<template>
  <div v-if="ui">
    <ClientOnly>
      <article class="md-content">
        <ContentRenderer :value="ui" />
      </article>
      <ui-link-back />
    </ClientOnly>
  </div>
</template>
