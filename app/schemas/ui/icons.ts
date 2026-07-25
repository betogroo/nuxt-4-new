import z from 'zod'

export const IconSchema = z.enum(
  Object.keys(ICONS) as [keyof typeof ICONS, ...(keyof typeof ICONS)[]],
)

export type Icon = z.infer<typeof IconSchema>

