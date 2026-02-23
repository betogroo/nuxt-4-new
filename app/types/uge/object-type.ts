import type { ObjectTypeSchema, z } from '~/schemas'

export type ObjectType = z.infer<typeof ObjectTypeSchema>
