import z from 'zod'

export const numberSelectOption = z
  .number({ required_error: REQUIRED_SELECT_FIELD })
  .min(1, REQUIRED_SELECT_FIELD)

export const uuidSelectOption = z
  .string({ required_error: REQUIRED_SELECT_FIELD })
  .uuid()
  .min(1, REQUIRED_SELECT_FIELD)
