import type { z } from '~/schemas'
import type { ExpenseTypeSchema } from '~/schemas/uge/entities'
import type { ExpenseTypeReadSchema } from '~/schemas/uge/dto'

export type ExpenseType = z.infer<typeof ExpenseTypeSchema>
export type ExpenseTypeRead = z.infer<typeof ExpenseTypeReadSchema>
