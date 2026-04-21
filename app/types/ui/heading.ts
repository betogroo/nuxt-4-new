import type z from 'zod'
import type { HeadingAlignSchema, HeadingLevelSchema, HeadingWeightSchema } from '~/schemas/ui'

export type HeadingLevel = z.infer<typeof HeadingLevelSchema>
export type HeadingWeight = z.infer<typeof HeadingWeightSchema>
export type HeadingAlign = z.infer<typeof HeadingAlignSchema>
