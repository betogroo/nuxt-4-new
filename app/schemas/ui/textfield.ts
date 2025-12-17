import { z } from '~/schemas'

export const TextFieldTypeSchema = z.enum(['text', 'email', 'password', 'number'])
