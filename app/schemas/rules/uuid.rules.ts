import { z } from '~/schemas'

export const uuidRule = z.string().uuid().trim()
