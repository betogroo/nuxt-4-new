import z from 'zod'

export const DialogVariantSchema = z.enum(['outlined', 'elevated'])
export const DialogSizeSchema = z.enum(['small', 'medium', 'large'])

export type DialogVariant = z.infer<typeof DialogVariantSchema>
export type DialogSize = z.infer<typeof DialogSizeSchema>

