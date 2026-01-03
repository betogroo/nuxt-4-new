<script setup lang="ts">
  interface Props {
    showReset?: boolean
    submitLabel?: string
    resetLabel?: string
    isValid?: boolean
  }
  const { submitLabel = 'Enviar', resetLabel = 'Limpar' } = defineProps<Props>()

  const $emit = defineEmits<{
    submit: []
    reset: []
  }>()

  const form = ref()

  const submit = async () => {
    $emit('submit')
  }

  const reset = () => {
    $emit('reset')
  }

  defineExpose({
    submit,
    reset,
  })
</script>

<template>
  <v-form ref="form" @submit.prevent="submit"
    ><slot />
    <template v-if="$slots.actions"><slot name="actions" /></template>
    <template v-else>
      <div class="d-flex justify-end ga-3">
        <ui-btn :disabled="isValid" type="submit">{{ submitLabel }}</ui-btn>
        <ui-btn color="red" type="button" @click="reset">{{ resetLabel }}</ui-btn>
      </div>
    </template>
  </v-form>
</template>
