<script setup lang="ts">
  import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'
  import type { BtnIconVariant } from '~/types'

  interface Props {
    icon?: string
    variant?: BtnIconVariant
    to: RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric | string
    ariaLabel?: string
  }
  const { variant = 'plain', icon = 'mdi-home', ariaLabel = 'Link' } = defineProps<Props>()
</script>

<template>
  <v-btn :aria-label="ariaLabel" :icon="icon" :ripple="false" :to="to" :variant="variant" />
</template>
