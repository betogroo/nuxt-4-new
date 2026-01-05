import { z } from '~/schemas'

export const NotificationTypeSchema = z.enum(['success', 'warning', 'error', 'info'])
