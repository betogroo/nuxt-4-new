import type { NotificationOptions, NotificationType } from '~/schemas/ui'

const useNotification = () => {
  const notificationStore = useNotificationStore()

  const notify = (text: string, type: NotificationType, options?: NotificationOptions) =>
    notificationStore.open(text, type, options?.timeout)
  return { notify }
}

export default useNotification
