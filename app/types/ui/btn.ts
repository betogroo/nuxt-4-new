import type { BtnVariantSchema, z } from '~/schemas'

export type BtnVariant = z.infer<typeof BtnVariantSchema>
