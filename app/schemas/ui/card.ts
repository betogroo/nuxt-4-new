import z from 'zod'

export const CardVariantSchema = z.enum(['outlined', 'text', 'elevated', 'tonal'])

export type CardVariant = z.infer<typeof CardVariantSchema>
