import z from 'zod'

export const DialogVariantSchema = z.enum(['outlined', 'elevated'])
export const DialogSizeSchema = z.enum(['small', 'medium', 'large'])
