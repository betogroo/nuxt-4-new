import type { z, IconSchema } from '~/schemas'

export type Icon = z.infer<typeof IconSchema>
