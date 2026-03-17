import type { PackagingTypeSchema, PackagingTypeReadSchema, z } from '~/schemas'

export type PackagingType = z.infer<typeof PackagingTypeSchema>
export type PackagingTypeRead = z.infer<typeof PackagingTypeReadSchema>
