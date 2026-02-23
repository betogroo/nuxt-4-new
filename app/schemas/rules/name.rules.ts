import { z } from '~/schemas'

export const nameRule = z.string().trim()

export const nameField = (min: number) => nameRule.min(min, MIN_LENGTH(min))
