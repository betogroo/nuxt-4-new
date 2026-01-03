<script setup lang="ts">
  import type { BtnVariant, Icon } from '~/types'
  interface Props {
    type?: 'button' | 'submit'
    disabled?: boolean
    loading?: boolean
    variant?: BtnVariant
    icon?: Icon
  }

  const { type = 'button', variant = 'elevated', icon = undefined } = defineProps<Props>()

  defineEmits<{
    (e: 'click', ev: MouseEvent): void
  }>()
</script>

<template>
  <v-btn
    :disabled="disabled"
    :loading="loading"
    :prepend-icon="icon ? ICONS[icon] : undefined"
    :type="type"
    v-bind="$attrs"
    :variant="variant"
    @click="$emit('click', $event)"
    ><slot
  /></v-btn>
</template>
