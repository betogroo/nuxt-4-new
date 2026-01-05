import type { NotificationTypeSchema, NotificationOptionsSchema, z } from '~/schemas'

export type NotificationType = z.infer<typeof NotificationTypeSchema>
export type NotificationOptions = z.infer<typeof NotificationOptionsSchema>
