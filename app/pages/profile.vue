<script setup lang="ts">
  definePageMeta({
    layout: 'default',
  })

  const { data: currentUser } = useCurrentUser()
</script>

<template>
  <ui-page title="Profile">
    {{ currentUser?.profile }}
  </ui-page>
</template>
