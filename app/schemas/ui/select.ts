import z from 'zod'

export const SelectModeSchema = z.enum(['select', 'autocomplete'])
