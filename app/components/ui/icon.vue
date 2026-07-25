<script setup lang="ts">
  import type { Icon } from '~/schemas/ui'

  interface Props {
    icon: Icon
    color?: string
  }
  const { color = undefined } = defineProps<Props>()
</script>

<template>
  <v-icon :color="color" v-bind="$attrs" :icon="ICONS[icon]" />
</template>
