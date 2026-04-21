import type z from 'zod'
import type { SelectModeSchema } from '~/schemas/ui'

export type SelectMode = z.infer<typeof SelectModeSchema>
