import z from 'zod'

export const GridSizeSchema = z.union([z.literal('auto'), z.coerce.number().int().min(1).max(12)])
export const GridDirectionSchema = z.union([z.literal('row'), z.literal('column')])

export type GridSize = z.infer<typeof GridSizeSchema>
export type GridDirection = z.infer<typeof GridDirectionSchema>
