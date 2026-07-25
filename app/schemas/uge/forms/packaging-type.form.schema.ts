import type z from 'zod'
import { PackagingTypeInsertSchema } from '../dto/packaging-type.insert.dto'

export const PackagingTypeFormSchema = PackagingTypeInsertSchema

export type PackagingTypeForm = z.infer<typeof PackagingTypeFormSchema>

