import { z } from '~/schemas'

export const IconSchema = z.enum(
  Object.keys(ICONS) as [keyof typeof ICONS, ...(keyof typeof ICONS)[]],
)
