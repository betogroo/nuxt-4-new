import { z } from '~/schemas'

export const uuidRule = z.string().uuid().trim()

export const uuidSelectOption = z
  .string({ required_error: REQUIRED_SELECT_FIELD })
  .uuid()
  .min(1, REQUIRED_SELECT_FIELD)
