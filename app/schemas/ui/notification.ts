import z from 'zod'

export const NotificationTypeSchema = z.enum(['success', 'warning', 'error', 'info'])
export const NotificationOptionsSchema = z.object({
  timeout: z.number().min(2000).max(8000),
})

export type NotificationType = z.infer<typeof NotificationTypeSchema>
export type NotificationOptions = z.infer<typeof NotificationOptionsSchema>

