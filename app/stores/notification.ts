import type { NotificationType } from '~/types'

export const useNotificationStore = defineStore('notification', () => {
  const isOpen = ref(false)
  const text = ref<string>('')
  const type = ref<NotificationType>('info')
  const timeout = ref(2000)

  const close = () => {
    isOpen.value = false
  }

  const open = (newText: string, newType: NotificationType, newTimeout?: number) => {
    setText(newText)
    setType(newType)
    isOpen.value = true
    timeout.value = newTimeout ?? 2000
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
      timeout.value = 2000
    }
  })

  return { isOpen, text, timeout, close, open, setText, type }
})
