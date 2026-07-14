import type z from 'zod'
import type { CardVariantSchema } from '~/schemas/ui/card'

export type CardVariant = z.infer<typeof CardVariantSchema>
