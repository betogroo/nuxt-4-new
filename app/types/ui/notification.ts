import type { NotificationTypeSchema, z } from '~/schemas'

export type NotificationType = z.infer<typeof NotificationTypeSchema>
