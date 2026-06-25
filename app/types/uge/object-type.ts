import type z from 'zod'
import type {
  ObjectTypeReadSchema,
  ObjectTypeReadSummarySchema,
} from '~/schemas/uge/dto/object-type.read.dto'
import type { ObjectTypeSchema } from '~/schemas/uge/entities/object-type.schema'

export type ObjectType = z.infer<typeof ObjectTypeSchema>
export type ObjectTypeRead = z.infer<typeof ObjectTypeReadSchema>
export type ObjectTypeReadSummary = z.infer<typeof ObjectTypeReadSummarySchema>
