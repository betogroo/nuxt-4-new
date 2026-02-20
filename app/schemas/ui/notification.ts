import { z } from '~/schemas'

export const NotificationTypeSchema = z.enum(['success', 'warning', 'error', 'info'])
export const NotificationOptionsSchema = z.object({
  timeout: z.number().min(2000).max(8000),
})
