<script setup lang="ts">
  interface Props {
    loading?: boolean
    disabled?: boolean
  }
  defineProps<Props>()
</script>

<template>
  <ui-base-btn :disabled="disabled" :loading="loading" v-bind="$attrs"><slot /></ui-base-btn>
</template>
