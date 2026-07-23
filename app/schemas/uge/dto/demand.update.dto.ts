// schemas/uge/dto/demand.update.dto.ts
import type z from 'zod'
import { DemandInsertSchema } from './demand.insert.dto'

export const DemandUpdateSchema = DemandInsertSchema.partial()

export type DemandUpdate = z.infer<typeof DemandUpdateSchema>
