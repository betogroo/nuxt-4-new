import z from 'zod'

export const UiDensitySchema = z.enum(['compact', 'default', 'comfortable'])
export const StatusSchema = z.enum(['idle', 'pending', 'success', 'error'])

export type UiDensity = z.infer<typeof UiDensitySchema>
export type Status = z.infer<typeof StatusSchema>

