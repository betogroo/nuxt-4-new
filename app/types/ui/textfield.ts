import type { TextFieldTypeSchema, TextFieldVariantSchema, z } from '~/schemas'

export type TextFieldType = z.infer<typeof TextFieldTypeSchema>
export type TextFieldVariant = z.infer<typeof TextFieldVariantSchema>
