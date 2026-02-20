import { z } from '~/schemas'

export const DialogVariantSchema = z.enum(['outlined', 'elevated'])
export const DialogSizeSchema = z.enum(['small', 'medium', 'large'])
