import type z from 'zod'
import { ObjectTypeInsertSchema } from '../dto/object-type.insert.dto'

export const ObjectTypeFormSchema = ObjectTypeInsertSchema

export type ObjectTypeForm = z.infer<typeof ObjectTypeFormSchema>
