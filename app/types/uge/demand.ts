import type { Tables, Inserts, Updates } from '~/types'
import type {
  DemandSchema,
  z,
  DemandRowsSchema,
  DemandReadSchema,
  DemandInsertSchema,
  DemandFormSchema,
  DemandItemSchema,
  DemandItemReadSchema,
} from '~/schemas'

export type Demand = z.infer<typeof DemandSchema>
export type DemandRows = z.infer<typeof DemandRowsSchema>
export type DemandRead = z.infer<typeof DemandReadSchema>

export type DemandInsert = z.infer<typeof DemandInsertSchema>
export type DemandForm = z.infer<typeof DemandFormSchema>
export type DemandUpdate = Updates<'demand'>

export type DemandEvents = Tables<'demand_events'>
export type DemandEventsInsert = Inserts<'demand_events'>
export type DemandEventsUpdate = Updates<'demand_events'>

export type DemandItem = z.infer<typeof DemandItemSchema>
export type DemandItemRead = z.infer<typeof DemandItemReadSchema>
