import type z from 'zod'
import type { GridDirectionSchema, GridSizeSchema } from '~/schemas/ui/grid'

export type GridSize = z.infer<typeof GridSizeSchema>
export type GridDirection = z.infer<typeof GridDirectionSchema>
