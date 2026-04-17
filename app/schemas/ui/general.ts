import { z } from '~/schemas'

export const UiDensitySchema = z.enum(['compact', 'default', 'comfortable'])
