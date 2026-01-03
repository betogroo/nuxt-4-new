import type { CardVariantSchema, z } from '~/schemas'

export type CardVariant = z.infer<typeof CardVariantSchema>
