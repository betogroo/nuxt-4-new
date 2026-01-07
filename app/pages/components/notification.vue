<script setup lang="ts">
  const { data: notification } = await useAsyncData(() =>
    queryCollection('notification').path('/ui').all(),
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

  console.log(notification.value)
</script>

<template>
  <div>
    <ContentRenderer v-for="value in notification" :key="value.id" :value="value.body" />
    <ui-link-back />
  </div>
</template>
