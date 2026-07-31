import type z from 'zod'
import { ObjectTypeSchema } from '../entities/object-type.schema'

export const ObjectTypeInsertSchema = ObjectTypeSchema

export type ObjectTypeInsert = z.infer<typeof ObjectTypeInsertSchema>
