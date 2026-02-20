<script setup lang="ts">
  import type { TextFieldDensity, TextFieldVariant } from '~/types'

  interface Props {
    items: unknown
    name: string
    variant?: TextFieldVariant
    density?: TextFieldDensity
  }
  const { name, variant = 'outlined', density = 'compact' } = defineProps<Props>()

  const { value, errorMessage } = useField<string>(name)
</script>

<template>
  <v-select
    v-model="value"
    :density="density"
    :error-messages="errorMessage"
    item-title="name"
    item-value="id"
    :items="items"
    :variant="variant"
  />
</template>
