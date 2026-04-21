import z from 'zod'

export const UiDensitySchema = z.enum(['compact', 'default', 'comfortable'])
