import { z } from '~/schemas'

export const TextFieldTypeSchema = z.enum(['text', 'email', 'password', 'number', 'date'])
export const TextFieldVariantSchema = z.enum(['outlined', 'solo'])
export const TextFieldDensitySchema = z.enum(['compact', 'default', 'comfortable'])
