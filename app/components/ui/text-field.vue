<script setup lang="ts">
  import type { TextFieldDensity, TextFieldType, TextFieldVariant } from '~/types'

  interface Props {
    name: string
    label?: string
    placeholder?: string
    type?: TextFieldType
    variant?: TextFieldVariant
    disabled?: boolean
    loading?: boolean
    clearable?: boolean
    density?: TextFieldDensity
  }
  const {
    name,
    variant = 'outlined',
    density = 'compact',
    type = 'text',
    label = undefined,
    placeholder = undefined,
  } = defineProps<Props>()

  const { value, errorMessage } = useField<string>(name)

  const showPassword = ref(false)
  const isPassword = computed(() => type === 'password')
  const actualType = computed((): 'text' | 'password' =>
    isPassword.value && !showPassword.value ? 'password' : 'text',
  )
  const passwordIcon = computed(() => (showPassword.value ? ICONS['eye'] : ICONS['eye-off']))
  const togglePassword = () => {
    if (isPassword.value) showPassword.value = !showPassword.value
  }
</script>
}

<template>
  <v-text-field
    v-model="value"
    v-bind="$attrs"
    :append-inner-icon="type === 'password' ? passwordIcon : undefined"
    :clearable="clearable"
    :density="density"
    :disabled="disabled"
    :error-messages="errorMessage"
    :label="label"
    :loading="loading"
    :placeholder="placeholder"
    :type="actualType"
    :variant="variant"
    @click:append-inner="togglePassword"
  />
</template>
