import z from 'zod'

export const BtnVariantSchema = z.enum(['outlined', 'text', 'elevated'])

export type BtnVariant = z.infer<typeof BtnVariantSchema>

