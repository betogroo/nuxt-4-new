<script setup lang="ts">
  import type { NotificationType } from '~/types'

  interface Props {
    title: string
    type: NotificationType
  }
  defineProps<Props>()
</script>

<template>
  <v-alert :type="type">{{ title }}</v-alert>
</template>
