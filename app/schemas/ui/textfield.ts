import z from 'zod'

export const TextFieldTypeSchema = z.enum(['text', 'email', 'password', 'number', 'date'])
export const TextFieldVariantSchema = z.enum(['outlined', 'solo'])
