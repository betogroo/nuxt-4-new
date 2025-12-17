<script setup lang="ts">
  const $emit = defineEmits<{
    submit: []
    reset: []
  }>()

  const form = ref()

  const submit = async () => {
    const isValid = await form.value?.validate()
    if (isValid) $emit('submit')
  }

  const reset = () => {
    form.value?.reset()
    $emit('reset')
  }

  defineExpose({
    submit,
    reset,
  })
</script>

<template>
  <v-form ref="form" @submit.prevent="submit"><slot /></v-form>
</template>
