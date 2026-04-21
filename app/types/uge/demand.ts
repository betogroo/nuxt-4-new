import type z from 'zod'
import type { DemandItemInsertSchema } from '~/schemas/uge/dto/demand-item.insert.dto'
import type { DemandItemReadSchema } from '~/schemas/uge/dto/demand-item.read.dto'
import type { DemandStatusTransitionReadSchema } from '~/schemas/uge/dto/demand-status-transition.read.dto'
import type { DemandStatusReadSchema } from '~/schemas/uge/dto/demand-status.read.dto'
import type { DemandInsertSchema } from '~/schemas/uge/dto/demand.insert.dto'
import type { DemandReadDetailSchema, DemandReadSchema } from '~/schemas/uge/dto/demand.read.dto'
import type { DemandItemSchema } from '~/schemas/uge/entities/demand-item.schema'
import type { DemandStatusSchema } from '~/schemas/uge/entities/demand-status.schema'
import type { DemandSchema } from '~/schemas/uge/entities/demand.schema'
import type { DemandItemFormSchema } from '~/schemas/uge/forms/demand-item.form.schema'
import type { DemandFormSchema } from '~/schemas/uge/forms/demand.form.schema'
import type { Updates } from '~/types'

export type DemandForm = z.infer<typeof DemandFormSchema>
export type DemandUpdate = Updates<'demands'>

//new
export type DemandStatusTransitionsRead = z.infer<typeof DemandStatusTransitionReadSchema>
export type DemandStatusRead = z.infer<typeof DemandStatusReadSchema>
export type DemandStatus = z.infer<typeof DemandStatusSchema>

export type DemandItem = z.infer<typeof DemandItemSchema>
export type DemandItemRead = z.infer<typeof DemandItemReadSchema>
export type DemandItemInsert = z.infer<typeof DemandItemInsertSchema>
export type DemandItemForm = z.infer<typeof DemandItemFormSchema>

export type Demand = z.infer<typeof DemandSchema>
export type DemandRead = z.infer<typeof DemandReadSchema>
export type DemandReadDetail = z.infer<typeof DemandReadDetailSchema>
export type DemandInsert = z.infer<typeof DemandInsertSchema>
