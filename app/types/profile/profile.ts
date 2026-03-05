import type { ProfileSchema, z } from '~/schemas'

export type Profile = z.infer<typeof ProfileSchema>
