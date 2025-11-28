import type z from 'zod'
import type { IconButtonSchema } from '~/schemas'

export type IconButton = z.infer<typeof IconButtonSchema>
