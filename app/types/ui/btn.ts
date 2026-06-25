import type z from 'zod'
import type { BtnVariantSchema } from '~/schemas/ui'

export type BtnVariant = z.infer<typeof BtnVariantSchema>
