<script setup lang="ts">
  import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'
  import type { BtnIconSize, BtnIconVariant, Icon } from '~/types'

  interface Props {
    icon?: Icon
    variant?: BtnIconVariant
    to?: RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric | string
    ariaLabel?: string
    compact?: boolean
    size?: BtnIconSize
  }
  const {
    variant = 'plain',
    icon = 'home',
    ariaLabel = 'Link',
    to = undefined,
    compact = false,
    size = 'default',
  } = defineProps<Props>()

  const $emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
  }>()

  const onClick = (event: MouseEvent) => $emit('click', event)
</script>

<template>
  <v-btn
    :aria-label="ariaLabel"
    :density="compact ? 'compact' : 'default'"
    :icon="ICONS[icon]"
    :ripple="false"
    :size="size"
    :to="to"
    :variant="variant"
    @click="onClick"
  />
</template>
