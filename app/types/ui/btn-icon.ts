import type z from 'zod'
import type { BtnIconSizeSchema, BtnIconVariantSchema } from '~/schemas/ui'

export type BtnIconVariant = z.infer<typeof BtnIconVariantSchema>
export type BtnIconSize = z.infer<typeof BtnIconSizeSchema>
