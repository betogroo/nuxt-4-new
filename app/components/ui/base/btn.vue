<script setup lang="ts">
  interface Props {
    type?: 'button' | 'submit'
    disabled?: boolean
    loading?: boolean
  }

  const { type = 'button' } = defineProps<Props>()

  defineEmits<{
    (e: 'click', ev: MouseEvent): void
  }>()
</script>

<template>
  <v-btn
    :disabled="disabled"
    :loading="loading"
    :type="type"
    v-bind="$attrs"
    @click="$emit('click', $event)"
    ><slot
  /></v-btn>
</template>
