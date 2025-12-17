<script setup lang="ts">
  interface Props {
    label: string
  }
  defineProps<Props>()
  const formModel = defineModel<string | null>()
</script>

<template>
  <ui-base-text-field
    v-bind="$attrs"
    v-model="formModel"
    density="compact"
    :label="label"
    variant="outlined"
  />
</template>
