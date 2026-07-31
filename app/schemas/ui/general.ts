import z from 'zod'

export const UiDensitySchema = z.enum(['compact', 'default', 'comfortable'])
export const UiStatusSchema = z.enum(['idle', 'pending', 'success', 'error'])

export const UiJustifySchema = z.enum([
  'end',
  'center',
  'space-around',
  'space-between',
  'space-evenly',
  'start',
])

export const UiAlignSchema = z.enum(['end', 'center', 'start', 'baseline', 'stretch'])
export const UiTypeSchema = z.enum(['success', 'info', 'warning', 'error'])
export const UiVariantSchema = z.enum(['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'])

export type UiJustify = z.infer<typeof UiJustifySchema>
export type UiAlign = z.infer<typeof UiAlignSchema>
export type UiType = z.infer<typeof UiTypeSchema>
export type UiVariant = z.infer<typeof UiVariantSchema>
export type UiDensity = z.infer<typeof UiDensitySchema>
export type UiStatus = z.infer<typeof UiStatusSchema>
