<script setup lang="ts">
  const route = useRoute()
  const { data: db } = await useAsyncData(() =>
    queryCollection('db').path(`/db/${route.params.slug}`).first(),
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

  if (!db.value) {
    throw createError({ statusCode: 404 })
  }
</script>

<template>
  <div v-if="db">
    <ClientOnly>
      <ui-page>
        <article class="md-content">
          <ContentRenderer :value="db" />
        </article>
        <ui-link-back />
      </ui-page>
    </ClientOnly>
  </div>
</template>
