import type { TextFieldTypeSchema, z } from '~/schemas'

export type TextFieldType = z.infer<typeof TextFieldTypeSchema>
