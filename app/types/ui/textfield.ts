import type z from 'zod'
import type { TextFieldTypeSchema, TextFieldVariantSchema } from '~/schemas/ui'

export type TextFieldType = z.infer<typeof TextFieldTypeSchema>
export type TextFieldVariant = z.infer<typeof TextFieldVariantSchema>
