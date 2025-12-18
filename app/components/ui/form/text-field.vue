<script setup lang="ts">
  interface Props {
    label: string
    name: string
  }
  const props = defineProps<Props>()
  const { value, errorMessage, handleBlur } = useField<string>(props.name)
</script>

<template>
  <ui-base-text-field
    v-bind="$attrs"
    v-model="value"
    density="compact"
    :error="errorMessage"
    :label="label"
    variant="outlined"
    @blur="handleBlur"
  />
</template>
