import type { z, BtnIconVariantSchema, BtnIconSizeSchema } from '~/schemas'

export type BtnIconVariant = z.infer<typeof BtnIconVariantSchema>
export type BtnIconSize = z.infer<typeof BtnIconSizeSchema>
