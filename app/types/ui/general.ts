import type { UiDensitySchema, z } from '~/schemas'

export type UiDensity = z.infer<typeof UiDensitySchema>
