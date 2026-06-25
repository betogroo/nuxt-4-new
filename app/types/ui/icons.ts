import type z from 'zod'
import type { IconSchema } from '~/schemas/ui'

export type Icon = z.infer<typeof IconSchema>
