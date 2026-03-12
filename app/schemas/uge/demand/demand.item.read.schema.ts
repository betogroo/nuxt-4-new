import z from 'zod'
import { DemandItemSchema } from '~/schemas'

export const DemandItemReadSchema = DemandItemSchema

export const DemandItemReadRowsSchema = z.array(DemandItemReadSchema)
