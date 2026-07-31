import type z from 'zod'
import { ObjectTypeSchema } from '../entities/object-type.schema'

export const ObjectTypeReadSchema = ObjectTypeSchema.pick({
  id: true,
  name: true,
  ptres: true,
})

export const ObjectTypeReadSummarySchema = ObjectTypeSchema.omit({
  created_at: true,
  updated_at: true,
  active: true,
  deleted_at: true,
})

export type ObjectTypeRead = z.infer<typeof ObjectTypeReadSchema>
export type ObjectTypeReadSummary = z.infer<typeof ObjectTypeReadSummarySchema>
