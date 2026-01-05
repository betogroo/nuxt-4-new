import type { NotificationType } from '~/types'

const useNotification = () => {
  const notificationStore = useNotificationStore()

  const notify = (text: string, type: NotificationType) => notificationStore.open(text, type)
  return { notify }
}

export default useNotification
