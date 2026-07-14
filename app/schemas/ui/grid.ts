import z from 'zod'

export const GridSizeSchema = z.union([z.literal('auto'), z.coerce.number().int().min(1).max(12)])
export const GridDirection = z.union([z.literal('row'), z.literal('column')])
