import type {
  ObjectTypeReadSchema,
  ObjectTypeReadSummarySchema,
  ObjectTypeSchema,
  z,
} from '~/schemas'

export type ObjectType = z.infer<typeof ObjectTypeSchema>
export type ObjectTypeRead = z.infer<typeof ObjectTypeReadSchema>
export type ObjectTypeReadSummary = z.infer<typeof ObjectTypeReadSummarySchema>
