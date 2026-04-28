import type z from 'zod'
import type { GridSizeSchema } from '~/schemas/ui/grid'

export type GridSize = z.infer<typeof GridSizeSchema>
