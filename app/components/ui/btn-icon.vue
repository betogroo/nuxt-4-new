<script setup lang="ts">
  import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'
  import type { BtnIconVariant, Icon } from '~/types'

  interface Props {
    icon?: Icon
    variant?: BtnIconVariant
    to?: RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric | string
    ariaLabel?: string
    compact?: boolean
  }
  const {
    variant = 'plain',
    icon = 'home',
    ariaLabel = 'Link',
    to = undefined,
    compact = false,
  } = defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
  }>()

  const onClick = (event: MouseEvent) => $emit('click', event)
</script>

<template>
  <v-btn
    :aria-label="ariaLabel"
    :density="compact ? 'compact' : undefined"
    :icon="ICONS[icon]"
    :ripple="false"
    :to="to"
    :variant="variant"
    @click="onClick"
  />
</template>
