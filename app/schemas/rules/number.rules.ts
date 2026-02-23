import { z } from '~/schemas'

export const positiveNumber = z.number().positive()

export const numberSelectOption = z
  .number({ required_error: REQUIRED_SELECT_FIELD })
  .min(1, REQUIRED_SELECT_FIELD)
