import type { NotificationTheme } from '~/types'

export const useNotificationStore = defineStore('notification', () => {
  const isOpen = ref(false)
  const text = ref<string>('')
  const theme = ref<NotificationTheme>()

  const close = () => {
    isOpen.value = false
    resetText()
  }

  const open = (text: string, theme: NotificationTheme) => {
    setText(text)
    setTheme(theme)
    isOpen.value = true
  }

  const setText = (newText: string) => {
    text.value = newText
  }
  const resetText = () => (text.value = '')

  const setTheme = (newTheme: NotificationTheme) => (theme.value = newTheme)

  watch(isOpen, (value) => {
    if (!value) {
      resetText()
    }
  })

  return { isOpen, text, close, open, setText, theme }
})
