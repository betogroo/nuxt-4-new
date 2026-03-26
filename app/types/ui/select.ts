import type { z, SelectModeSchema } from '~/schemas'

export type SelectMode = z.infer<typeof SelectModeSchema>
