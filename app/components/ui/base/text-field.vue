<script setup lang="ts">
  import type { TextFieldType } from '~/types'

  interface Props {
    label?: string
    placeholder?: string
    type?: TextFieldType
    disabled?: boolean
    loading?: boolean
    error?: string
    clearable?: boolean
  }
  defineProps<Props>()

  const modelValue = defineModel<string | number | null>()
</script>

<template>
  <v-text-field
    v-model="modelValue"
    :clearable="clearable"
    :disabled="disabled"
    :error="!!error"
    :error-messages="error"
    :label="label"
    :loading="loading"
    :placeholder="placeholder"
    :type="type"
    v-bind="$attrs"
  />
</template>
