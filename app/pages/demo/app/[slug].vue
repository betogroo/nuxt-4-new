<script setup lang="ts">
  const route = useRoute()
  const { data: app } = await useAsyncData(() =>
    queryCollection('app').path(`/app/${route.params.slug}`).first(),
  )
  definePageMeta({
    layout: 'default',

    showBack: true,
    menu: {
      title: 'Ui Notifications',
      hidden: false,
      areas: ['components'],
      priority: 'notifications',
    },
  })

  if (!app.value) {
    throw createError({ statusCode: 404 })
  }
</script>

<template>
  <div v-if="app">
    <ClientOnly>
      <ui-page>
        <article class="md-content">
          <ContentRenderer :value="app" />
        </article>
        <ui-link-back />
      </ui-page>
    </ClientOnly>
  </div>
</template>
