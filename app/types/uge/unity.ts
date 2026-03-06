import type { UnitySchema, UnityReadSchema, z } from '~/schemas'

export type Unity = z.infer<typeof UnitySchema>
export type UnityRead = z.infer<typeof UnityReadSchema>
