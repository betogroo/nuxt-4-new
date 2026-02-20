<script setup lang="ts">
  const route = useRoute()
  const { data: docs } = await useAsyncData(() =>
    queryCollection('docs').path(`/docs/${route.params.slug}`).first(),
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

  if (!docs.value) {
    throw createError({ statusCode: 404 })
  }
</script>

<template>
  <div v-if="docs">
    <ClientOnly>
      <ui-page>
        <article class="md-content">
          <ContentRenderer :value="docs" />
        </article>
        <ui-link-back />
      </ui-page>
    </ClientOnly>
  </div>
</template>
