import type { z } from '~/schemas'
import type { PackagingTypeSchema } from '~/schemas/uge/entities'
import type { PackagingTypeReadSchema } from '~/schemas/uge/dto'

export type PackagingType = z.infer<typeof PackagingTypeSchema>
export type PackagingTypeRead = z.infer<typeof PackagingTypeReadSchema>
