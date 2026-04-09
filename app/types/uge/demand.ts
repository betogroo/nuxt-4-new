import type { Updates } from '~/types'
import type { z } from '~/schemas'
import type {
  DemandItemFormSchema,
  DemandItemInsertSchema,
  DemandItemReadSchema,
  DemandItemSchema,
  DemandSchema,
  DemandReadDetailSchema,
  DemandInsertSchema,
  DemandFormSchema,
  DemandReadSchema,
} from '~/schemas/uge'

export type DemandForm = z.infer<typeof DemandFormSchema>
export type DemandUpdate = Updates<'demands'>

//new
export type DemandItem = z.infer<typeof DemandItemSchema>
export type DemandItemRead = z.infer<typeof DemandItemReadSchema>
export type DemandItemInsert = z.infer<typeof DemandItemInsertSchema>
export type DemandItemForm = z.infer<typeof DemandItemFormSchema>

export type Demand = z.infer<typeof DemandSchema>
export type DemandRead = z.infer<typeof DemandReadSchema>
export type DemandReadDetail = z.infer<typeof DemandReadDetailSchema>
export type DemandInsert = z.infer<typeof DemandInsertSchema>
