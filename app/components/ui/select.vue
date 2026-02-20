<script setup lang="ts" generic="T extends Record<string, any>">
  import type { TextFieldDensity, TextFieldVariant } from '~/types'

  interface Props {
    items: T[]
    name: string
    itemTitle?: keyof T
    itemValue?: keyof T
    itemSubtitle?: keyof T
    variant?: TextFieldVariant
    density?: TextFieldDensity
  }
  const {
    items,
    name,
    itemTitle = 'title',
    itemValue = 'id',
    variant = 'outlined',
    density = 'compact',
    itemSubtitle = '',
  } = defineProps<Props>()

  const { value, errorMessage } = useField<T[typeof itemValue]>(name)

  const normalizedItems = computed(() =>
    items.map((item) => ({
      title: item[itemTitle],
      value: item[itemValue],
      subtitle: itemSubtitle ? item[itemSubtitle] : undefined,
    })),
  )
</script>

<template>
  <v-select
    v-bind="$attrs"
    v-model="value"
    :density="density"
    :error-messages="errorMessage"
    item-props
    item-title="title"
    item-value="value"
    :items="normalizedItems"
    :variant="variant"
  />
</template>
