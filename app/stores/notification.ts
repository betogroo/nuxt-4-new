import type { NotificationType } from '~/types'

export const useNotificationStore = defineStore('notification', () => {
  const isOpen = ref(false)
  const text = ref<string>('')
  const type = ref<NotificationType>('info')

  const close = () => {
    isOpen.value = false
    resetText()
    resetType()
  }

  const open = (text: string, type: NotificationType) => {
    setText(text)
    setType(type)
    isOpen.value = true
  }

  const setText = (newText: string) => {
    text.value = newText
  }
  const resetText = () => (text.value = '')

  const setType = (newType: NotificationType) => (type.value = newType)
  const resetType = () => (type.value = 'info')

  watch(isOpen, (value) => {
    if (!value) {
      resetText()
      resetType()
    }
  })

  return { isOpen, text, close, open, setText, type }
})
