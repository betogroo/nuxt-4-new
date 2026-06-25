import type z from 'zod'
import type { PackagingTypeReadSchema } from '~/schemas/uge/dto/packaging-type.read.dto'
import type { PackagingTypeSchema } from '~/schemas/uge/entities/packaging-type.schema'

export type PackagingType = z.infer<typeof PackagingTypeSchema>
export type PackagingTypeRead = z.infer<typeof PackagingTypeReadSchema>
