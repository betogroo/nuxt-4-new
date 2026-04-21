import type z from 'zod'
import type { NotificationOptionsSchema, NotificationTypeSchema } from '~/schemas/ui'

export type NotificationType = z.infer<typeof NotificationTypeSchema>
export type NotificationOptions = z.infer<typeof NotificationOptionsSchema>
