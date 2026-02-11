import { z } from '~/schemas'

export const BtnIconVariantSchema = z.enum(['plain', 'text'])
export const BtnIconSizeSchema = z.enum(['x-small', 'small', 'default', 'large', 'x-large'])
