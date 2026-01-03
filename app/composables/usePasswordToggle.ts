import type { Icon } from '~/types'

const usePasswordToggle = () => {
  const showPassword = ref(false)
  const iconPassword = computed<Icon>(() => (showPassword.value ? 'eye' : 'eye-off'))
  const togglePassword = () => (showPassword.value = !showPassword.value)

  return { showPassword, iconPassword, togglePassword }
}

export default usePasswordToggle
