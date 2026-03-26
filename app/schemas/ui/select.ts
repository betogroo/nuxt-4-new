import { z } from '~/schemas'

export const SelectModeSchema = z.enum(['select', 'autocomplete'])
