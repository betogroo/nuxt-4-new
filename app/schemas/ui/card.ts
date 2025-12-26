import { z } from '~/schemas'

export const CardVariantSchema = z.enum(['outlined', 'text', 'elevated', 'tonal'])
