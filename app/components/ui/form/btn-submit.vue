<script setup lang="ts">
  interface Props {
    loading?: boolean
    disabled?: boolean
  }
  defineProps<Props>()
</script>

<template>
  <ui-base-btn
    :disabled="disabled"
    :loading="loading"
    v-bind="$attrs"
    type="submit"
    variant="outlined"
    ><slot
  /></ui-base-btn>
</template>
