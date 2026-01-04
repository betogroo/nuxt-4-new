<script setup lang="ts">
  import type { DialogSize, DialogVariant, Icon } from '~/types'

  interface Props {
    titleIcon?: Icon
    title?: string
    size?: DialogSize
    variant?: DialogVariant
  }
  const {
    titleIcon = undefined,
    title = '',
    size = 'medium',
    variant = 'elevated',
  } = defineProps<Props>()

  const isDialogActive = defineModel<boolean>()
</script>

<template>
  <v-dialog v-model="isDialogActive" width="auto">
    <v-card
      :prepend-icon="titleIcon && title ? ICONS[titleIcon] : undefined"
      :title="title"
      :variant="variant"
      :width="DIALOG_SIZE[size]"
    >
      <template #text>
        <slot />
      </template>
      <v-card-actions v-if="$slots.actions">
        <slot name="actions" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
