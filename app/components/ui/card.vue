<script setup lang="ts">
  import type { CardVariant } from '~/types'

  interface Props {
    variant?: CardVariant
    width?: string | number
    color?: string
  }
  const { variant = 'outlined', width = undefined, color = undefined } = defineProps<Props>()
</script>

<template>
  <v-card :color="color" :variant="variant" :width="width" v-bind="$attrs">
    <v-card-text>
      <slot />
    </v-card-text>
    <v-card-actions class="justify-end">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>
