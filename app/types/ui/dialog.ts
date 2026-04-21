import type z from 'zod'
import type { DialogSizeSchema, DialogVariantSchema } from '~/schemas/ui'

export type DialogSize = z.infer<typeof DialogSizeSchema>
export type DialogVariant = z.infer<typeof DialogVariantSchema>
