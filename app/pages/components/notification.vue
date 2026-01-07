<script setup lang="ts">
  const { data: notification } = await useAsyncData(() =>
    queryCollection('ui').path('/ui/notification').first(),
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
    <ContentRenderer v-if="notification" :value="notification" />
    <ui-link-back />
  </div>
</template>
