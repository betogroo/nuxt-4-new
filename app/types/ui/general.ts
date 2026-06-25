import type z from 'zod'
import type { UiDensitySchema, StatusSchema } from '~/schemas/ui'

export type UiDensity = z.infer<typeof UiDensitySchema>
export type Status = z.infer<typeof StatusSchema>
