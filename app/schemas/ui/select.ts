import z from 'zod'

export const SelectModeSchema = z.enum(['select', 'autocomplete'])

export type SelectMode = z.infer<typeof SelectModeSchema>
