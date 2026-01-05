import { z } from '~/schemas'

export const NotificationThemeSchema = z.enum(['success', 'warning', 'error'])
