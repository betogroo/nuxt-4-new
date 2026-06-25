import z from 'zod'

export const UiDensitySchema = z.enum(['compact', 'default', 'comfortable'])
export const StatusSchema = z.enum(['idle', 'pending', 'success', 'error'])
