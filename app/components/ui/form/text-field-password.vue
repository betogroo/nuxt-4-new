<script setup lang="ts">
  interface Props {
    label: string
  }
  defineProps<Props>()
  const formModel = defineModel<string | null>()

  const show = ref(false)
  const toggle = () => (show.value = !show.value)
  const icon = computed(() => (show.value ? 'mdi-eye' : 'mdi-eye-off'))
</script>

<template>
  <ui-form-text-field
    v-bind="$attrs"
    v-model="formModel"
    :append-inner-icon="icon"
    :label="label"
    :type="show ? 'text' : 'password'"
    @click:append-inner="toggle"
  />
</template>
