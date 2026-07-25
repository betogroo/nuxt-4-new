<script setup lang="ts">
  import type { Icon } from '~/schemas/ui'

  type TitleProps = {
    title: string
    append?: never
  }
  type AppendProps = {
    title?: never
    append: string
  }

  interface BaseProps {
    icon?: Icon
    shape?: 'default' | 'pill'
    iconColor?: string
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
    onClick?: () => void
  }

  export type UiMenuItemProps = BaseProps & (TitleProps | AppendProps)

  const props = defineProps<UiMenuItemProps>()

  const $emit = defineEmits<{
    onclick: []
  }>()

  const variant = computed(() => props.variant ?? 'outlined')
  const shape = computed(() => props.shape ?? 'default')
</script>

<template>
  <v-list-item
    v-bind="$attrs"
    :class="shape === 'pill' ? 'rounded-pill' : 'rounded'"
    nav
    v:bind="$attrs"
    :variant="variant"
    @click="$emit('onclick')"
  >
    <template v-if="icon" #prepend>
      <ui-icon :color="iconColor" :icon="icon" />
    </template>

    <template v-if="title" #title>
      <span class="text-label-large">{{ title }}</span>
    </template>

    <template v-else-if="append" #append>
      <span class="text-label-large">{{ append }}</span>
    </template>
  </v-list-item>
</template>
