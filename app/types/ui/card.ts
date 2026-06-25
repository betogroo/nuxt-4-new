import type z from 'zod'
import type { CardVariantSchema } from '~/schemas/ui'

export type CardVariant = z.infer<typeof CardVariantSchema>
