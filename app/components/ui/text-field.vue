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

  const { value, errorMessage, setValue } = useField(name)
  //altera o value
  const model = computed({
    get: () => value.value,

    set: (val: unknown) => {
      if (type === 'number') {
        setValue(val === '' ? val : Number(val))
        return
      }

      setValue(val)
    },
  })
  const { showPassword, iconPassword, togglePassword } = usePasswordToggle()

  const isPassword = computed(() => type === 'password')
  const isDate = computed(() => type === 'date')
  const isNumber = computed(() => type === 'number')
  /* const actualType = computed(
    (): TextFieldType => (isPassword.value && !showPassword.value ? 'password' : 'text'),
  ) */
  const actualType = computed((): TextFieldType => {
    if (isPassword.value && !showPassword.value) return 'password'
    if (isDate.value) return 'date'
    if (isNumber.value) return 'number'
    return 'text'
  })
</script>
}

<template>
  <v-text-field
    v-model="model"
    v-bind="$attrs"
    :append-inner-icon="isPassword ? ICONS[iconPassword] : undefined"
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
