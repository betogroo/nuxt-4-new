import type { NotificationThemeSchema, z } from '~/schemas'

export type NotificationTheme = z.infer<typeof NotificationThemeSchema>
