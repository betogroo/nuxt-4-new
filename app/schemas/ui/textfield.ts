import z from 'zod'

export const TextFieldTypeSchema = z.enum(['text', 'email', 'password', 'number', 'date'])
export const TextFieldVariantSchema = z.enum(['outlined', 'solo'])

export type TextFieldType = z.infer<typeof TextFieldTypeSchema>
export type TextFieldVariant = z.infer<typeof TextFieldVariantSchema>
