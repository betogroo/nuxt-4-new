import type { Tables, Inserts, Updates } from '~/types'
import type { DemandSchema, z, DemandRowsSchema, DemandWithObjectTypeSchema } from '~/schemas'

export type Demand = z.infer<typeof DemandSchema>
export type DemandRows = z.infer<typeof DemandRowsSchema>
export type DemandWithObjectType = z.infer<typeof DemandWithObjectTypeSchema>

export type DemandInsert = Inserts<'demand'>
export type DemandUpdate = Updates<'demand'>

export type DemandEvents = Tables<'demand_events'>
export type DemandEventsInsert = Inserts<'demand_events'>
export type DemandEventsUpdate = Updates<'demand_events'>
