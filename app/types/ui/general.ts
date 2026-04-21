import type z from 'zod'
import type { UiDensitySchema } from '~/schemas/ui'

export type UiDensity = z.infer<typeof UiDensitySchema>
