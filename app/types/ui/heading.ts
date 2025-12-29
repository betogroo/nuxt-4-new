import type { z, HeadingLevelSchema, HeadingWeightSchema, HeadingAlignSchema } from '~/schemas'

export type HeadingLevel = z.infer<typeof HeadingLevelSchema>
export type HeadingWeight = z.infer<typeof HeadingWeightSchema>
export type HeadingAlign = z.infer<typeof HeadingAlignSchema>
