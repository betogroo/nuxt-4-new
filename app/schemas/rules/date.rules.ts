import { z } from '~/schemas'

export const dateRule = z.string().date()
export const datetimeRule = z.string().datetime({ offset: true })

export const futureDate = z
  .string({ required_error: REQUIRED_FIELD })
  .date(INVALID_DATE)
  .refine((value) => {
    const date = new Date(value + 'T00:00:00')
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date >= today
  }, INVALID_PAST_DATE)
