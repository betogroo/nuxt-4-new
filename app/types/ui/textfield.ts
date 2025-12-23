import type {
  TextFieldTypeSchema,
  TextFieldVariantSchema,
  TextFieldDensitySchema,
  z,
} from '~/schemas'

export type TextFieldType = z.infer<typeof TextFieldTypeSchema>
export type TextFieldVariant = z.infer<typeof TextFieldVariantSchema>
export type TextFieldDensity = z.infer<typeof TextFieldDensitySchema>
