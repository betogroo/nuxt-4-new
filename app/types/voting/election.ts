import type { Tables, Inserts, Updates } from '~/types'

export type Election = Tables<'election'>
export type ElectionInsert = Inserts<'election'>
export type ElectionUpdate = Updates<'election'>
