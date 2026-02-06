import type { Tables, Inserts, Updates } from '~/types'

export type Demand = Tables<'demand'>
export type DemandInsert = Inserts<'demand'>
export type DemandUpdate = Updates<'demand'>

export type DemandEvents = Tables<'demand_events'>
export type DemandEventsInsert = Inserts<'demand_events'>
export type DemandEventsUpdate = Updates<'demand_events'>
