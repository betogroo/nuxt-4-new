import type { Updates } from '~/types'
import type {
  DemandSchema,
  z,
  DemandRowsSchema,
  DemandReadSchema,
  DemandInsertSchema,
  DemandFormSchema,
} from '~/schemas'
import type {
  DemandItemFormSchema,
  DemandItemInsertSchema,
  DemandItemReadSchema,
  DemandItemSchema,
} from '~/schemas/uge'

export type Demand = z.infer<typeof DemandSchema>
export type DemandRows = z.infer<typeof DemandRowsSchema>
export type DemandRead = z.infer<typeof DemandReadSchema>

export type DemandInsert = z.infer<typeof DemandInsertSchema>
export type DemandForm = z.infer<typeof DemandFormSchema>
export type DemandUpdate = Updates<'demands'>

//new
export type DemandItem = z.infer<typeof DemandItemSchema>
export type DemandItemRead = z.infer<typeof DemandItemReadSchema>
export type DemandItemInsert = z.infer<typeof DemandItemInsertSchema>
export type DemandItemForm = z.infer<typeof DemandItemFormSchema>
