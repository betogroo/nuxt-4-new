<script setup lang="ts">
  const { data: dialog } = await useAsyncData(() =>
    queryCollection('ui').path('/ui/dialog').first(),
  )
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Ui Dialog',
      hidden: false,
      areas: ['components'],
      priority: 'dialog',
    },
  })

  console.log(dialog.value)
</script>

<template>
  <div>
    <ContentRenderer v-if="dialog" :value="dialog" />

    <ui-link-back />
  </div>
</template>
