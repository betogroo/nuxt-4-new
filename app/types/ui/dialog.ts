import type { DialogSizeSchema, DialogVariantSchema, z } from '~/schemas'

export type DialogSize = z.infer<typeof DialogSizeSchema>
export type DialogVariant = z.infer<typeof DialogVariantSchema>
